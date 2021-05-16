"use strict";
// Erstellt mit Anna-Lara, Benni und Sebastiana
var Aufgabe02;
(function (Aufgabe02) {
    //const save: HTMLElement = document.getElementById("save");     -- wird erst später benötigt
    //const anzeigeflaeche: HTMLElement = document.getElementById("anzeigeflaeche");   // in der Anzeigefläche wird folgendes ausgegeben
    class Flower {
        setHead(_head) {
            this.head = _head; // _head = späterer Variablenname
        }
        setBody(_body) {
            this.body = _body;
        }
        setBottom(_bottom) {
            this.bottom = _bottom;
        }
        setName(_name) {
            this.name = _name;
        }
    }
    let flower = new Flower(); // neue Blume (Objekt) anlegen
    /*for (let i: number = 0; i < kopfBilder.length; i++) {
        const imgElem: HTMLImageElement = document.createElement("img");  // wir erstellen neue Bildelemente aus zu data.js - zu jedem Bild wird ein Bildelement verlinkt und angelegt
        imgElem.src = kopfBilder[i];
        imgElem.className = "auswahlbilder";
        imgElem.id = String(i + 1);             // +1 da Array
        anzeigeflaeche.appendChild(imgElem);    // wird auf der Anzeigefläche ausgegeben
    }*/
    const optionsHead = document.querySelectorAll(".auswahlbilder"); // es wird eine Variable erstellt, in der alle HTML-Elemente gespeichert aus der Klasse "Auswahlbilder"
    function highlightSelection(element) {
        optionsHead.forEach(element => {
            element.style.border = "5px solid whitesmoke";
            element.style.boxShadow = "3px 5px 10px rgb(205,197,191)";
        });
        element.style.border = "5px solid rgb(139,137,137)"; // ausgewähltes Kopfbild hervorheben
        element.style.boxShadow = "3px 5px 10px rgb(205,197,191)";
    }
    optionsHead.forEach(element => {
        element.addEventListener("click", function () {
            flower.setHead(element.id); // id des Bildes wird übergeben (Zeile 34)
            highlightSelection(element); // hervorheben
            console.log(flower.head); // zur Überprüfung (Zahl des Bildes wird angegeben wie auch aus Zeile 34)
        });
    });
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map