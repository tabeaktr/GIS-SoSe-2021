"use strict";
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
async function makeCards() {
    let response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let listOfUrl = await response.json();
    let dupListOfUrl = listOfUrl;
    listOfUrl = listOfUrl.concat(dupListOfUrl); //langes array mit jedem der 8 Bilder aus der Datenbank doppelt
    shuffle(listOfUrl);
    fillBoard(listOfUrl);
    timer();
}
makeCards();
//Knuth Shuffle Algorithmus (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
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
const cells = document.querySelectorAll("td");
//tabelle füllen
function fillBoard(array) {
    for (let index = 0; index < array.length; index++) {
        cells[index].innerHTML = "<img class='verdeckt' src='" + "./images/background.jpg" + "'></img>"; //" + array[index].url.toString() + "
        console.log(cells[index].innerHTML);
        cells[index].addEventListener("click", () => { karteKlicken(cells[index], array[index].url.toString()); }); //FIXME
    }
}
let ersteKarte;
let spielScore;
function karteKlicken(_td, _url) {
    _td.className = "karten";
    if (ersteKarte == null) {
        ersteKarte = _td;
        _td.innerHTML = "<img class='' src='" + _url + "'></img>";
    }
    else {
        if (_td == ersteKarte) {
            _td.removeEventListener("click", () => { karteKlicken(ersteKarte, _url); });
            spielScore++;
        }
    }
    ersteKarte = null;
    if (spielScore == 8) {
        spielBeenden();
    }
}
const scoreForm = document.getElementById("punkte");
function spielBeenden() {
    scoreForm.hidden = false;
}
let sekunden = 0;
let timerHTML = document.getElementById("zeit");
function timer() {
    sekunden++;
    timerHTML.innerHTML = "Zeit: " + Math.floor(sekunden / 60) + " : " + (sekunden % 60);
}
//# sourceMappingURL=script.js.map