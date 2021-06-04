"use strict";
// Die Abgabe wurde mit Benni und Sebastiana erstellt
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handlejson);
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handlehtml);
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tabea-ketterer.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText;
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tabea-ketterer.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        server.innerHTML = responseText;
        console.log(server);
    }
})(Aufgabe_3_2 || (Aufgabe_3_2 = {}));
//# sourceMappingURL=index.js.map