"use strict";
// Erstellt mit Anna-Lara, Benni und Sebastiana
var Aufgabe1_und_2;
(function (Aufgabe1_und_2) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    //const torsoButton: HTMLElement = document.getElementById("showTorso"); //getElementById seems to work best
    //const legButton: HTMLElement = document.getElementById("showLegs");
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
        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL = currentData[bodyPart];
                const imgElem = createImgElement(bodyPartImgURL, bodyPart);
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
            case "Kopf":
                url = getURL("Kopf", _id);
                sessionStorage.setItem("Kopf", url);
                break;
            case "Koerper":
                url = getURL("Koerper", _id);
                sessionStorage.setItem("Koerper", url);
                break;
            case "Fuesse":
                url = getURL("Fuesse", _id);
                sessionStorage.setItem("Fuesse", url);
                break;
            default:
                break;
        }
        paint();
    }
    function getURL(bodypart, id) {
        const chosenURL = propertyData[bodypart][id];
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
        showSelected(sessionStorage.getItem("Kopf"));
        showSelected(sessionStorage.getItem("Koerper"));
        showSelected(sessionStorage.getItem("Fuesse"));
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
    optionsHead.forEach(element => {
        element.addEventListener("click", function () {
            selectElem(element.id);
            highlightSelection(element);
        });
    });
})(Aufgabe1_und_2 || (Aufgabe1_und_2 = {}));
//# sourceMappingURL=script.js.map