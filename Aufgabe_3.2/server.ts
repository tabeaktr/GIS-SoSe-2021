import * as Http from "http";
import * as Url from "url";                        // Server wird mit * erstellt - alle Funkionen werden importiert

export namespace A_3_2Server {

    console.log("Starting server");                // Starting server wird auf der Konsole ausgegeben

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 festgelegt


    let server: Http.Server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest);  // Funktion handleRequest wird ausgeführt
    server.addListener("listening", handleListen); // Funktion handleListen wird ausgeführt
    server.listen(port);                           // Server nimmt port und startet

    function handleListen(): void {                // Konsole gibt Listening aus wenn Funktion aufgerufen wird
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("I hear voices!");             // in der Konsole wird ausgegeben "I hear voices!"
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");    // setzt den header http.ServerAntwort auf HTML mit Zeichencode UTF-8
        _response.setHeader("Access-Control-Allow-Origin", "*");            // erlaubt dem Browser Code egal welchen Ursprungs anzufragen, um die Ressource zu erreichen

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); // wandelt Euery in assoziatives Array um
            let pathname: string = <string>url.pathname;
            if (pathname == "/json") {                                      // url.Query wird in String umgewandelt und ausgegeben (console.log)
                let jsonString: string = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        else if (pathname == "/html") {                                     // url.Query wird in Schlüssel-Werte-Paare umgewandelt
            for (let key in url.query) {
                _response.write (key + ":" + url.query[key] + "<br/>");
                       
            }
        }
    }
        _response.end();    // Response wird beendet
    }
}