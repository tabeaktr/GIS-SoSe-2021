"use strict";
// Mit Anna-Lara, Benni und Sebastiana erstellt
var Aufgabe2_5;
(function (Aufgabe2_5) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    const heroku = document.getElementById("heroku");
    let data;
    async function communicate(_url) {
        let response = await fetch(_url);
        let antwort = await response.json();
        data = antwort;
        buildPageFromData(data);
        console.log(antwort);
    }
    communicate("https://tabeaktr.github.io/GIS-SoSe-2021/Aufgabe_2.5/data.json?1"); //?1 um Cache zu refreshen
    //create img elemente
    function createImgElement(_url, _teil) {
        const imgElem = document.createElement("img");
        imgElem.src = _url;
        imgElem.id = _teil;
        return imgElem;
    }
    //data von data.ts einbindung
    function buildPageFromData(_buildData) {
        const currentData = _buildData[currentStep];
        for (const koerperteil in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, koerperteil)) {
                const koerperteilImgURL = currentData[koerperteil];
                const imgElem = createImgElement(koerperteilImgURL, koerperteil);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
        const optionsHead = document.querySelectorAll(".pic-reel");
        function highlightSelection(_elem) {
            optionsHead.forEach(_elem => {
                _elem.classList.remove("highlighted");
            });
            _elem.classList.add("highlighted");
        }
        //eventlistener
        optionsHead.forEach(_elem => {
            _elem.addEventListener("click", function () {
                selectElem(_elem.id);
                highlightSelection(_elem);
            });
        });
    }
    //select, store and show chosen elements
    function selectElem(_id) {
        let id = Number(_id);
        let url = "";
        switch (currentStep) {
            case "Kopf":
                url = getURL("Kopf", id);
                sessionStorage.setItem("Kopf", url);
                break;
            case "Koerper":
                url = getURL("Koerper", id);
                sessionStorage.setItem("Koerper", url);
                break;
            case "Fuesse":
                url = getURL("Fuesse", id);
                sessionStorage.setItem("Fuesse", url);
                break;
            default:
                break;
        }
        paint();
    }
    function getURL(_koerperteil, _id) {
        const chosenURL = data[_koerperteil][_id];
        return chosenURL;
    }
    function showSelected(_url) {
        if (_url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem = createImgElement(_url);
        selection.appendChild(imgElem);
    }
    function paint() {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("Kopf"));
        showSelected(sessionStorage.getItem("Koerper"));
        showSelected(sessionStorage.getItem("Fuesse"));
    }
    if (heroku) {
        communicateHeroku("https://gis-communication.herokuapp.com");
        async function communicateHeroku(_url) {
            const blume = { head: sessionStorage.getItem("Kopf"), body: sessionStorage.getItem("Kopf"), legs: sessionStorage.getItem("Kopf") };
            let query = new URLSearchParams(blume);
            _url = _url + "?" + query.toString();
            const response = await fetch(_url);
            const stringResponse = await response.json();
            const p = document.createElement("p");
            const h = document.createElement("h3"); // h1 und h2 werden schon verwendet
            heroku.className = "response";
            heroku.appendChild(h);
            h.innerHTML = "Server Antwort:";
            heroku.appendChild(p);
            if (stringResponse.error) {
                p.className = "error";
                p.innerHTML = stringResponse.error;
            }
            else {
                p.className = "success";
                p.innerHTML = stringResponse.message;
            }
        }
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map