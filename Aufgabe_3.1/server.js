"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_3_1_Server = void 0;
const Http = require("http");
var A_3_1_Server;
(function (A_3_1_Server) {
    console.log("Starting server"); // Starting server wird auf der Konsole ausgegeben
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 festgelegt
    let server = Http.createServer(); // Server wird erstellt
    server.addListener("request", handleRequest); // Funktion handleRequest wird ausgeführt
    server.addListener("listening", handleListen); // Funktion handleListen wird ausgeführt
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end(); //Response wird beendet
    }
})(A_3_1_Server = exports.A_3_1_Server || (exports.A_3_1_Server = {}));
//# sourceMappingURL=server.js.map