"use strict";
let timer;
async function kartenErst() {
    let response = await fetch("https://tabea-ketterer.herokuapp.com/urlHol"); //holt URLs von Mongo
    let listeUrl = await response.json(); //URLs als json-Datei
    let dupListeUrl = listeUrl;
    listeUrl = listeUrl.concat(dupListeUrl); //langes array mit jedem der 8 Bilder aus der Datenbank doppelt
    shuffle(listeUrl);
    flaecheFuellen(listeUrl);
    timer = setInterval(setTime, 1000);
}
kartenErst();
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
//Tabelle füllen
function flaecheFuellen(array) {
    const cells = Array.from(document.querySelectorAll("td")); //Array aus NodeListe erstellen
    for (let index = 0; index < array.length; index++) {
        cells[index].innerHTML = "<img class='verdeckt' src='images/Cover.png'></img>"; //" + array[index].url.toString() + "
        cells[index].addEventListener("click", () => { karteKlicken(cells[index], array[index].url.toString()); });
    }
}
let ersteKarte;
let gedreht = false;
let gefundenePaare = [""];
function karteKlicken(_td, _url) {
    if (ersteKarte == _td || (gefundenePaare.indexOf(_td.innerHTML) != -1) || gedreht == true) {
        return;
    }
    if ((ersteKarte == undefined) || (ersteKarte == null)) {
        ersteKarte = _td;
        _td.innerHTML = "<img class='karten' src='" + _url + "'></img>";
    }
    else {
        _td.innerHTML = "<img class='karten' src='" + _url + "'></img>";
        if (_td.innerHTML == ersteKarte.innerHTML) {
            gefundenePaare.push(_td.innerHTML);
            console.log(gefundenePaare.length); //+1 pro match
            ersteKarte = null;
        }
        else {
            gedreht = true;
            setTimeout(() => {
                _td.innerHTML = "<img class='verdeckt' src='images/Cover.png'></img>";
                ersteKarte.innerHTML = _td.innerHTML;
                gedreht = false;
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
let totalSeconds = 0;
function spielBeenden() {
    const punkteForm = document.getElementById("punkte");
    let scoreForm = document.querySelector("form");
    clearInterval(timer);
    punkteForm.hidden = false;
    scoreForm.addEventListener("submit", (e) => {
        e.preventDefault(); //Seite lädt nicht neu
        fetch("https://tabea-ketterer.herokuapp.com/zeitHin?name=" + encodeURI(document.getElementById("nameSpieler").value) + "&time=" + encodeURI(document.getElementById("minutes").innerHTML) + ":" + encodeURI(document.getElementById("seconds").innerHTML));
        scoreForm.reset();
    });
}
function pad(_val) {
    let valString = _val.toString() + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}
function setTime() {
    ++totalSeconds;
    document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
    document.getElementById("minutes").innerHTML = pad(Math.floor(totalSeconds / 60));
}
//# sourceMappingURL=script.js.map