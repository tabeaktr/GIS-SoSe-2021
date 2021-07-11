"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
let mongoUrl = "mongodb+srv://User1:hello246@tabea.fzpsx.mongodb.net";
let timeCollection;
let urlCollection;
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
console.log("Starting Server");
let server = Http.createServer();
server.addListener("request", handleRequest);
server.listen(port);
connectToDatabase(mongoUrl);
async function connectToDatabase(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    urlCollection = mongoClient.db("Test").collection("URL");
    timeCollection = mongoClient.db("Test").collection("Times");
    console.log("Gleich soweit!");
}
async function handleRequest(_request, _response) {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_request.url) {
        let url = Url.parse(_request.url, true);
        let pathname = url.pathname;
        if (pathname == "/urlHin") {
            urlCollection.insertOne(url.query);
            connectToDatabase(mongoUrl); //Vorlage Aufgabe 3.4
        }
        if (pathname == "/urlHol") {
            _response.write(JSON.stringify(await (urlCollection.find().toArray())));
        }
        else if (pathname == "/urlEntf") {
            urlCollection.deleteOne(url.query);
            connectToDatabase(mongoUrl); //Vorlage Aufgabe 3.4
        }
        if (pathname == "/zeitHin") {
            timeCollection.insertOne(url.query);
            connectToDatabase(mongoUrl); //Vorlage Aufgabe 3.4
        }
        if (pathname == "/zeitHol") {
            _response.write(JSON.stringify(await (timeCollection.find().toArray())));
        }
    }
    _response.end();
}
//# sourceMappingURL=server.js.map