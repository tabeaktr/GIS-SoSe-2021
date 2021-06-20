"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_4 = void 0;
//mongodb+srv://User1:hello246@tabea.fzpsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe_3_4;
(function (Aufgabe_3_4) {
    let mongoCollection;
    //let mongoUrl: string = "mongodb+srv://User1:hello246@tabea.fzpsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoUrl = "mongodb+srv://User1:hello246@tabea.fzpsx.mongodb.net";
    //let mongoUrl: string = "mongodb://localhost:27017";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    console.log("Starting Server");
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zu Database", mongoCollection != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/abschicken") {
                mongoCollection.insertOne(url.query);
                connectToDatabase(mongoUrl);
            }
            if (pathname == "/erhalten") {
                _response.write(JSON.stringify(await (mongoCollection.find().toArray())));
            }
            else if (pathname == "/entfernen") {
                mongoCollection.deleteOne({ "vname": url.query["vname"], "nname": url.query["nname"], "mnumber": url.query["mnumber"] });
                connectToDatabase(mongoUrl);
            }
        }
        _response.end();
    }
})(Aufgabe_3_4 = exports.Aufgabe_3_4 || (exports.Aufgabe_3_4 = {}));
//# sourceMappingURL=server.js.map