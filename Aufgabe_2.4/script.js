"use strict";
// Mit Anna-Lara, Benni und Sebastiana erstellt
var Aufgabe1_und_2;
(function (Aufgabe1_und_2) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    //create img elemente
    function createImgElement(_url, _part) {
        const imgElem = document.createElement("img");
        imgElem.src = _url;
        imgElem.id = _part;
        return imgElem;
    }
    let propertyData = JSON.parse(Aufgabe1_und_2.data);
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
    }
    buildPageFromData(propertyData);
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
        const chosenURL = propertyData[_koerperteil][_id];
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
    paint();
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
})(Aufgabe1_und_2 || (Aufgabe1_und_2 = {}));
//# sourceMappingURL=script.js.map