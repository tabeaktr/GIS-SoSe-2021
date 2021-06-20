"use strict";
// Mit Sebastiana und Benni erstellt
var Aufgabe_3_4;
(function (Aufgabe_3_4) {
    let buttonAbschicken = document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);
    let buttonErhalten = document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);
    let buttonEnfernen = document.getElementById("datenEntfernen");
    buttonEnfernen.addEventListener("click", clickEntfernen);
    async function clickAbschicken() {
        let form = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://tabea-ketterer.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function clickErhalten() {
        //let url: string = "http://localhost:8100";
        let url = "https://tabea-ketterer.herokuapp.com";
        url = url + "/erhalten";
        let response = await fetch(url);
        let ausgabe = await response.text();
        let serverA = document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
        console.log(ausgabe);
        document.getElementById("datenbank").innerHTML = ausgabe;
    }
    async function clickEntfernen() {
        let form = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://tabea-ketterer.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/entfernen" + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let serverA = document.getElementById("datenbank");
        serverA.innerHTML = ausgabe;
    }
})(Aufgabe_3_4 || (Aufgabe_3_4 = {}));
//# sourceMappingURL=index.js.map