// Mit Anna-Lara, Benni und Sebastiana erstellt
namespace Aufgabe1_und_2 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");


    //create img elemente
    function createImgElement(url: string, part?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }

    interface Property {
        [data: string]: string[];
    }

    let propertyData: Property = JSON.parse(data);

    //data von data.ts einbindung
    function buildPageFromData(buildData: Property): void {
        const currentData: string[] = buildData[currentStep];

        for (const koerperteile in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, koerperteile)) {
                const koerperteilImgURL: string = currentData[koerperteile];
                const imgElem: HTMLImageElement = createImgElement(koerperteilImgURL, koerperteile);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(propertyData);

    //select, store and show chosen elements

    function selectElem(id: string): void {
        let _id: number = Number(id);
        let url: string = "";
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

    function getURL(koerperteil: string, id: number): string {
        const chosenURL: string = propertyData[koerperteil][id];
        return chosenURL;
    }

    function showSelected(url: string): void {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem: HTMLImageElement = createImgElement(url);
        selection.appendChild(imgElem);
    }

    function paint(): void {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("kopf"));
        showSelected(sessionStorage.getItem("koerper"));
        showSelected(sessionStorage.getItem("fuesse"));
    }
    paint();

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".pic-reel");

    function highlightSelection(elem: HTMLElement): void {
        optionsHead.forEach(elem => {
            elem.classList.remove("highlighted");
        });
        elem.classList.add("highlighted");
    }

    //eventlistener
    optionsHead.forEach(elem => {
        elem.addEventListener("click", function (): void {
            selectElem(elem.id);
            highlightSelection(elem);
        });
    });
}