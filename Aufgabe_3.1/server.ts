import * as Http from "http";
export namespace A_3_1_Server {

    console.log("Starting server");  // Starting server wird auf der Konsole ausgegeben

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 festgelegt

    let server: Http.Server = Http.createServer();  // Server wird erstellt
    server.addListener("request", handleRequest);   // Funktion handleRequest wird ausgeführt
    server.addListener("listening", handleListen);  // Funktion handleListen wird ausgeführt
    server.listen(port);

    function handleListen(): void { //Konsole gibt Listening aus wenn Funktion aufgerufen wird
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // I hear voices wird in der Konsole ausgegeben

        console.log("I hear voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end(); //Response wird beendet
    
    }
}
