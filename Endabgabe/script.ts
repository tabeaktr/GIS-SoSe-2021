/*
1. Array mit Bild-Urls aus DB laden.
2. Array duplizieren (
    arrayAusDB;
    arrayAusDB = arrayAusDB.concat(arrayAusDB);

    wenn nicht:
        array2 = arrayAusDB;
)

3. Array shuffeln
4. Durch Array Loopen:
    1. Array[i] auf aktuelle index i als id im html setzen (innerhtml)
   // 2. Array[0] entfernen (https://stackoverflow.com/questions/15292278/how-do-i-remove-an-array-item-in-typescript)

*/
async function clickAbschicken(): Promise<void> {
    // let form: FormData = new FormData(document.forms[0]);
    // let url: string = "https://tabea-ketterer.herokuapp.com";
    // let query: URLSearchParams = new URLSearchParams(<any>form);
    // url = url + "/abschicken" + "?" + query.toString();
    // await fetch(url);
    let response: Response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let listOfUrl = await response.json();
    let dupListOfUrl = listOfUrl;
    listOfUrl = listOfUrl.concat(dupListOfUrl);
}