/*
1. Array mit Bild-Urls aus DB laden.
2. Array duplizieren (
    arrayAusDB;
    arrayAusDB = arrayAusDB.concat(arrayAusDB);

    wenn nicht:
        array2 = arrayAusDB;
)

3. Array shuffeln
4. Durch Array Loopen:
    1. Array[i] auf aktuelle index i als id im html setzen (innerhtml)
   // 2. Array[0] entfernen (https://stackoverflow.com/questions/15292278/how-do-i-remove-an-array-item-in-typescript)

*/

async function makeCards(): Promise<void> {
    let response: Response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let listeUrl = await response.json();
    let dupListeUrl = listeUrl;
    listeUrl = listeUrl.concat(dupListeUrl); //langes array mit jedem der 8 Bilder aus der Datenbank doppelt
    //shuffle(listeUrl);
    fillBoard(listeUrl);
    //timer();
}

makeCards();


//Knuth Shuffle Algorithmus (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array: any): [] {
    let currentIndex: number = array.length, randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}



//tabelle füllen
function fillBoard(array: any) {
    const cells = Array.from(document.querySelectorAll("td")); //Array aus NodeListe erstellen

    for (let index: number = 0; index < array.length; index++) {
        cells[index].innerHTML = "<img class='verdeckt' src='images/background.jpg'></img>"; //" + array[index].url.toString() + "

        cells[index].addEventListener("click", () => { karteKlicken(cells[index], array[index].url.toString()); }); //FIXME
    }
}

let ersteKarte: HTMLTableDataCellElement;
let flip: boolean = false;
let gefundenePaare: string[] = [""];

function karteKlicken(_td: HTMLTableDataCellElement, _url: string) {
    if (ersteKarte == _td || (gefundenePaare.indexOf(_td.innerHTML) != -1) || flip == true) {
        return;
    }
    if ((ersteKarte == undefined) || (ersteKarte == null)) {
        ersteKarte = _td;
        _td.innerHTML = "<img class='karten' src='" + _url + "'></img>";
        console.log(ersteKarte);
        console.log(ersteKarte == undefined); //false
    } else {
        _td.innerHTML = "<img class='karten' src='" + _url + "'></img>";
        if (_td.innerHTML == ersteKarte.innerHTML) {
            gefundenePaare.push(_td.innerHTML);
            console.log(gefundenePaare.length); //+1 pro match
            ersteKarte = null;
        } else {
            flip = true;
            setTimeout(() => {
                _td.innerHTML = "<img class='verdeckt' src='images/background.jpg'></img>";
                ersteKarte.innerHTML = _td.innerHTML;
                flip = false;
                ersteKarte = null;
            }, 1000);
        }
    }


    if (gefundenePaare.length == 9) {
        spielBeenden();
    }
}



function spielBeenden(): void {
    const scoreForm: HTMLElement = document.getElementById("punkte");
    console.log(scoreForm);
    scoreForm.hidden = false;
}

// let sekunden: number = 0;
// let timerHTML: HTMLElement = document.getElementById("zeit");
// function timer(): void {
//     sekunden++;
//     timerHTML.innerHTML = "Zeit: " + Math.floor(sekunden / 60) + " : " + (sekunden % 60);
// }
