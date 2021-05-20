// Mit Anna-Lara, Benni und Sebastiana erstellt
namespace Aufgabe1_und_2 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");


    //create img elemente
    function createImgElement(_url: string, _part?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = _url;
        imgElem.id = _part;
        return imgElem;
    }

    interface Property {
        [data: string]: string[];
    }

    let propertyData: Property = JSON.parse(data);

    //data von data.ts einbindung
    function buildPageFromData(_buildData: Property): void {
        const currentData: string[] = _buildData[currentStep];

        for (const koerperteil in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, koerperteil)) {
                const koerperteilImgURL: string = currentData[koerperteil];
                const imgElem: HTMLImageElement = createImgElement(koerperteilImgURL, koerperteil);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(propertyData);

    //select, store and show chosen elements
    function selectElem(_id: string): void {
        let id: number = Number(_id);
        let url: string = "";
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

    function getURL(_koerperteil: string, _id: number): string {
        const chosenURL: string = propertyData[_koerperteil][_id];
        return chosenURL;
    }

    function showSelected(_url: string): void {
        if (_url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem: HTMLImageElement = createImgElement(_url);
        selection.appendChild(imgElem);
    }

    function paint(): void {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("Kopf"));
        showSelected(sessionStorage.getItem("Koerper"));
        showSelected(sessionStorage.getItem("Fuesse"));
    }
    paint();

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".pic-reel");

    function highlightSelection(_elem: HTMLElement): void {
        optionsHead.forEach(_elem => {
            _elem.classList.remove("highlighted");
        });
        _elem.classList.add("highlighted");
    }

    //eventlistener
    optionsHead.forEach(_elem => {
        _elem.addEventListener("click", function (): void {
            selectElem(_elem.id);
            highlightSelection(_elem);
        });
    });
}