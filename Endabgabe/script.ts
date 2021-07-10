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
    let listOfUrl = await response.json();
    let dupListOfUrl = listOfUrl;
    listOfUrl = listOfUrl.concat(dupListOfUrl); //langes array mit jedem der 8 Bilder aus der Datenbank doppelt
    shuffle(listOfUrl);
    fillBoard(listOfUrl);
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
    // for (let i: number = 0; array.length; i++) {
    //    let imageSpot: HTMLElement = document.getElementById("i");
    //    imageSpot.innerHTML = "<img class='memoryBild' src='" + array[i].url.toString() + "'></img>";
    // }
    const cells = document.querySelectorAll("td");
    cells.forEach(function (cell) {
        cell.innerHTML = "<img class='Karten' src='" + array[cell.id].url.toString() + "'></img>";
    });
}
