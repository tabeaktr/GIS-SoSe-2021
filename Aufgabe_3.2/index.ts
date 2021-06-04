// Die Abgabe wurde mit Benni und Sebastiana erstellt

namespace Aufgabe_3_2 {
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handlejson);       // click weist dem Button JSON zu
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handlehtml);       // click weist dem Button html zu

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function handlehtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);   // erzeugt FormData Objekt aus <form>
        let url: string = "https://tabea-ketterer.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        server.innerHTML = responseText;                    // füllt die index.html aus
    }

    async function handlejson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://tabea-ketterer.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: IResponse = await response.json();
        console.log(responseText);
        console.log(server);
    }

    interface IResponse {
        [key: string]: string;      //jede Info, die hereinkommt muss vom Typ string sein  , weiß auch, dass zweite Seite automatisch value ist
    }
}