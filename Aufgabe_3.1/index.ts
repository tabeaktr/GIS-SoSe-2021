// Die Abgabe wurde mit Benni und Sebastiana erstellt

namespace Aufgabe_3_1 {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", handle);

    async function handle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: RequestInfo = "https://tabea-ketterer.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams (<any>formData);
        _url = _url + "?" + query.toString();
        console.log(_url);
        await fetch(_url);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let response: Response = await fetch(_url);
        let answer: string = await response.text();
        console.log(answer);
        let paragraph: HTMLParagraphElement = document.createElement("p");
        paragraph.innerText = answer;
        document.body.appendChild(paragraph);
    }
}