// AUFGABE 2.3
// Erstellt mit Anna-Lara, Benni und Sebastiana

namespace Aufgabe1 {
    document.addEventListener("DOMContentLoaded", function (): void { // addEvLi sitzt drauf & realisiert was passiert
        
        const newRec: HTMLElement = document.getElementById("newRec");   //1. Button
        const recContainer: HTMLElement = document.querySelector(".recContainer");  //immer der erste recContainer wird gewählt (Zeichenfläche)
                                                // querySelector wählt das erste Objekt hinter der Klammer
        const reset: HTMLElement = document.getElementById("reset"); //2. Button

        class Rectangle {
            width: number;
            height: number;

            createRandomRec(): void {
                this.width = Math.floor(Math.random() * 100 + 20);  //  * 100 + 20   ergibt ganze Zahl 
                this.height = Math.floor(Math.random() * 100 + 20); // Math.random() ergibt zufällige zahl zwischen 0 und 1
            }
            
            drawRandom(rec: Rectangle): void { // Übergabe einer Variablen des Datentyps Rectangle 
                let x: number = Math.floor(Math.random() * 700);
                let y: number = Math.floor(Math.random() * 200 + 100); 
                let recDiv: HTMLDivElement  = document.createElement("div"); // neues div 
                recDiv.style.width = rec.width + "px"; // erstelltes div zuweisen
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "absolute";
                recDiv.style.backgroundColor = "yellow";  // Farbe der Rechtecke
                recContainer.appendChild(recDiv); // wird an body angehängt (hinten) | 
                //append flexibler (appC = auf Obj/El ein von der Klammer)                                ?????????????
            }
        }

        function addNewRec(): void {
            let rec: Rectangle = new Rectangle();
            rec.createRandomRec();
            rec.drawRandom(rec); //Ausgabe
        }

        function clearRecContainer(): void { //recC ALLES wird mit leerem String überschrieben
            recContainer.innerHTML = "";
        }

        newRec.addEventListener("click", addNewRec); //Funktion click
        reset.addEventListener("click", clearRecContainer); 
    });
}