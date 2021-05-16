// Erstellt mit Anna-Lara, Benni und Sebastiana

namespace Aufgabe02 {
    //const save: HTMLElement = document.getElementById("save");     -- wird erst später benötigt
    //const anzeigeflaeche: HTMLElement = document.getElementById("anzeigeflaeche");   // in der Anzeigefläche wird folgendes ausgegeben
    class Flower {
        head: string;
        body: string;
        bottom: string;
        name: string;

        setHead(_head: string): void {          // function wird erstellt und nimmt entgegen um welche Zahl von Bild es sich handelt (hier: 1-6) - Zwischenspeicher
            this.head = _head;                  // _head = späterer Variablenname
        }

        setBody(_body: string): void {          // Vorarbeit, da jeder part diese Funktion braucht
            this.body = _body;
        }

        setBottom(_bottom: string): void {
            this.bottom = _bottom;
        }

        setName(_name: string): void {
            this.name = _name;
        }
    }
    let flower: Flower = new Flower();          // neue Blume (Objekt) anlegen

    /*for (let i: number = 0; i < kopfBilder.length; i++) {
        const imgElem: HTMLImageElement = document.createElement("img");  // wir erstellen neue Bildelemente aus zu data.js - zu jedem Bild wird ein Bildelement verlinkt und angelegt 
        imgElem.src = kopfBilder[i];           
        imgElem.className = "auswahlbilder";
        imgElem.id = String(i + 1);             // +1 da Array
        anzeigeflaeche.appendChild(imgElem);    // wird auf der Anzeigefläche ausgegeben
    }*/

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".auswahlbilder");    // es wird eine Variable erstellt, in der alle HTML-Elemente gespeichert aus der Klasse "Auswahlbilder"

    function highlightSelection(element: HTMLElement): void {   // Kopfbilder
        optionsHead.forEach(element => {                        // für jedes Element in der Liste       ( => hier wirklich Pfeil)
            element.style.border = "5px solid whitesmoke";
            element.style.boxShadow = "3px 5px 10px rgb(205,197,191)";
        });

        element.style.border = "5px solid rgb(139,137,137)";    // ausgewähltes Kopfbild hervorheben
        element.style.boxShadow = "3px 5px 10px rgb(205,197,191)";
    }
    
    optionsHead.forEach(element => {
        element.addEventListener("click", function (): void {
            flower.setHead(element.id);     // id des Bildes wird übergeben (Zeile 34)
            highlightSelection(element);    // hervorheben
            console.log(flower.head);       // zur Überprüfung (Zahl des Bildes wird angegeben wie auch aus Zeile 34)
        });
    });
}