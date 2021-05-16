"use strict";
// Mit Anna-Lara, Benni und Sebastiana erstellt
var Aufgabe1_und_2;
(function (Aufgabe1_und_2) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    //create img elemente
    function createImgElement(url, part) {
        const imgElem = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }
    let propertyData = JSON.parse(Aufgabe1_und_2.data);
    //data von data.ts einbindung
    function buildPageFromData(buildData) {
        const currentData = buildData[currentStep];
        for (const koerperteile in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, koerperteile)) {
                const koerperteilImgURL = currentData[koerperteile];
                const imgElem = createImgElement(koerperteilImgURL, koerperteile);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(propertyData);
    //select, store and show chosen elements
    function selectElem(id) {
        let _id = Number(id);
        let url = "";
        switch (currentStep) {
            case "kopf":
                url = getURL("Kopf", _id);
                sessionStorage.setItem("kopf", url);
                break;
            case "koerper":
                url = getURL("koerper", _id);
                sessionStorage.setItem("koerper", url);
                break;
            case "fuesse":
                url = getURL("fuesse", _id);
                sessionStorage.setItem("fuesse", url);
                break;
            default:
                break;
        }
        paint();
    }
    function getURL(koerperteil, id) {
        const chosenURL = propertyData[koerperteil][id];
        return chosenURL;
    }
    function showSelected(url) {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem = createImgElement(url);
        selection.appendChild(imgElem);
    }
    function paint() {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("kopf"));
        showSelected(sessionStorage.getItem("koerper"));
        showSelected(sessionStorage.getItem("fuesse"));
    }
    paint();
    const optionsHead = document.querySelectorAll(".pic-reel");
    function highlightSelection(elem) {
        optionsHead.forEach(elem => {
            elem.classList.remove("highlighted");
        });
        elem.classList.add("highlighted");
    }
    //eventlistener
    optionsHead.forEach(elem => {
        elem.addEventListener("click", function () {
            selectElem(elem.id);
            highlightSelection(elem);
        });
    });
})(Aufgabe1_und_2 || (Aufgabe1_und_2 = {}));
//# sourceMappingURL=script.js.map