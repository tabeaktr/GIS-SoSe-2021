let timer: NodeJS.Timeout;
async function makeCards(): Promise<void> {
    let response: Response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let listeUrl = await response.json();
    let dupListeUrl = listeUrl;
    listeUrl = listeUrl.concat(dupListeUrl); //langes array mit jedem der 8 Bilder aus der Datenbank doppelt
    //shuffle(listeUrl); //FIX SHUFFLE ACTIVE
    fillBoard(listeUrl);
    timer = setInterval(setTime, 1000);
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

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds: number = 0;


function spielBeenden(): void {
    const punkteForm: HTMLElement = document.getElementById("punkte");
    let scoreForm: HTMLFormElement = document.querySelector("form");
    clearInterval(timer);

    punkteForm.hidden = false;
    scoreForm.addEventListener("submit", (e) => {
        e.preventDefault(); //Seite lädt nicht neu
        fetch("https://tabea-ketterer.herokuapp.com/addScore?name=" + encodeURI((document.getElementById("nameSpieler") as HTMLInputElement).value) + "&time=" + encodeURI(document.getElementById("minutes").innerHTML) + ":" + encodeURI(document.getElementById("seconds").innerHTML));
        scoreForm.reset();
    });
}

function pad(_val: number) { //(https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript)
    let valString = _val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


function setTime(): void {
    ++totalSeconds;
    document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
    document.getElementById("minutes").innerHTML = pad(Math.floor(totalSeconds / 60));
}

// function timer(): void {
//     sekunden++;
//     timerHTML.innerHTML = "Zeit: " + Math.floor(sekunden / 60) + " : " + (sekunden % 60);
// }
