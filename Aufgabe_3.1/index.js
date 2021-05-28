"use strict";
// Die Abgabe wurde mit Benni und Sebastiana erstellt
var Aufgabe_3_1;
(function (Aufgabe_3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://tabea-ketterer.herokuapp.com";
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        await fetch(_url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let response = await fetch(_url);
        let answer = await response.text();
        console.log(answer);
        let paragraph = document.createElement("p");
        paragraph.innerText = answer;
        document.body.appendChild(paragraph);
    }
})(Aufgabe_3_1 || (Aufgabe_3_1 = {}));
//# sourceMappingURL=index.js.map