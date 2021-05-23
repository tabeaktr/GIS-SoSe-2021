// Mit Anna-Lara, Benni und Sebastiana erstellt
namespace Aufgabe2_5 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");
    const heroku: HTMLElement = document.getElementById("heroku");

    let data: BData;
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let antwort: BData = await response.json();
        data = antwort;
        buildPageFromData(data);
        console.log(antwort);
    }

    communicate("https://tabeaktr.github.io/GIS-SoSe-2021/Aufgabe_2.5/data.json?1"); //?1 um Cache zu refreshen

    //create img elemente
    function createImgElement(_url: string, _teil?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = _url;
        imgElem.id = _teil;
        return imgElem;
    }

    //data von data.ts einbindung
    function buildPageFromData(_buildData: BData): void {
        const currentData: string[] = _buildData[currentStep];

        for (const koerperteil in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, koerperteil)) {
                const koerperteilImgURL: string = currentData[koerperteil];
                const imgElem: HTMLImageElement = createImgElement(koerperteilImgURL, koerperteil);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
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
        const chosenURL: string = data[_koerperteil][_id];
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

    if (heroku) {
        communicateHeroku("https://gis-communication.herokuapp.com");

        interface HirokuResponse {
            [key: string]: string;
        }

        async function communicateHeroku(_url: RequestInfo): Promise<void> {
            const blume: object = { head: sessionStorage.getItem("Kopf"), body: sessionStorage.getItem("Kopf"), legs: sessionStorage.getItem("Kopf") };
            let query: URLSearchParams = new URLSearchParams(<any>blume);
            _url = _url + "?" + query.toString();

            const response: Response = await fetch(_url);
            const stringResponse: HirokuResponse = await response.json();
            const p: HTMLParagraphElement = document.createElement("p");
            const h: HTMLParagraphElement = document.createElement("h3"); // h1 und h2 werden schon verwendet

            heroku.className = "response";
            heroku.appendChild(h);
            h.innerHTML = "Server Antwort:";
            heroku.appendChild(p);

            if (stringResponse.error) {
                p.className = "error";
                p.innerHTML = stringResponse.error;
            } else {
                p.className = "success";
                p.innerHTML = stringResponse.message;
            }
        }
    }
}