"use strict";
// AUFGABE 2.3
// Erstellt mit Anna-Lara, Benni und Sebastiana
var Aufgabe1;
(function (Aufgabe1) {
    document.addEventListener("DOMContentLoaded", function () {
        const newRec = document.getElementById("newRec"); //1. Button
        const recContainer = document.querySelector(".recContainer"); //immer der erste recContainer wird gewählt (Zeichenfläche)
        // querySelector wählt das erste Objekt hinter der Klammer
        const reset = document.getElementById("reset"); //2. Button
        class Rectangle {
            createRandomRec() {
                this.width = Math.floor(Math.random() * 100 + 20); //  * 100 + 20   ergibt ganze Zahl 
                this.height = Math.floor(Math.random() * 100 + 20); // Math.random() ergibt zufällige zahl zwischen 0 und 1
            }
            drawRandom(rec) {
                let x = Math.floor(Math.random() * 700);
                let y = Math.floor(Math.random() * 200 + 100);
                let recDiv = document.createElement("div"); // neues div 
                recDiv.style.width = rec.width + "px"; // erstelltes div zuweisen
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "absolute";
                recDiv.style.backgroundColor = "yellow"; // Farbe der Rechtecke
                recContainer.appendChild(recDiv); // wird an body angehängt (hinten) | 
                //append flexibler (appC = auf Obj/El ein von der Klammer)                                ?????????????
            }
        }
        function addNewRec() {
            let rec = new Rectangle();
            rec.createRandomRec();
            rec.drawRandom(rec); //Ausgabe
        }
        function clearRecContainer() {
            recContainer.innerHTML = "";
        }
        newRec.addEventListener("click", addNewRec); //Funktion click
        reset.addEventListener("click", clearRecContainer);
    });
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map