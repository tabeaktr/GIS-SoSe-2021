"use strict";
// Die Abgabe wurde mit Benni und Sebastiana erstellt
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handlejson); // click weist dem Button JSON zu
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handlehtml); // click weist dem Button html zu
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]); // erzeugt FormData Objekt aus <form>
        let url = "https://tabea-ketterer.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText; // füllt die index.html aus
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tabea-ketterer.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseTextA = await response.json();
        console.log(responseTextA);
    }
})(Aufgabe_3_2 || (Aufgabe_3_2 = {}));
//# sourceMappingURL=index.js.map