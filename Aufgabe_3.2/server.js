"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_3_2Server = void 0;
const Http = require("http");
const Url = require("url"); // Server wird mit * erstellt - alle Funkionen werden importiert
var A_3_2Server;
(function (A_3_2Server) {
    console.log("Starting server"); // Starting server wird auf der Konsole ausgegeben
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 festgelegt
    let server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest); // Funktion handleRequest wird ausgeführt
    server.addListener("listening", handleListen); // Funktion handleListen wird ausgeführt
    server.listen(port); // Server nimmt port und startet
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // in der Konsole wird ausgegeben "I hear voices!"
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // setzt den header http.ServerAntwort auf HTML mit Zeichencode UTF-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); // erlaubt dem Browser Code egal welchen Ursprungs anzufragen, um die Ressource zu erreichen
        if (_request.url) {
            let url = Url.parse(_request.url, true); // wandelt Euery in assoziatives Array um
            let pathname = url.pathname;
            if (pathname == "/json") { // url.Query wird in String umgewandelt und ausgegeben (console.log)
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
            else if (pathname == "/html") { // url.Query wird in Schlüssel-Werte-Paare umgewandelt
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        _response.end(); // Response wird beendet
    }
})(A_3_2Server = exports.A_3_2Server || (exports.A_3_2Server = {}));
//# sourceMappingURL=server.js.map