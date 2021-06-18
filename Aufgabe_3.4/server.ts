import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe_3_4 {

    interface Students {
        vorname: string;
        nachname: string;
        matrikelnummer: number;
    }

    let mongoCollection: Mongo.Collection;
    //let mongoUrl: string = "mongodb+srv://User1:hello246@tabea.fzpsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt
    
    console.log("Starting Server");

    function startServer(): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    
    startServer();
    connectToDatabase(mongoUrl);
    
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        mongoCollection = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zu Database", mongoCollection != undefined);

        /*let cursor: Mongo.Cursor = mongoCollection.find();
        let result: Students[] = await cursor.toArray();
        

        _response.write("<h2>" + "Serverantwort:" + "</h2>");

        for (let i: number = 0; i < result.length; i++) {
            _response.write("<div>" +
            "<p>" + result[i].name + "</p>" +
            "<p>" + result[i].nachname + "</p>" +
            "<p>" + result[i].matrikelnummer + "</p>" +
            "</div>");
        }*/
    }
    
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      
            if (url.pathname == "/abschicken" ) {
                mongoCollection.insertOne(url.query);
                
            }
            if (url.pathname == "/erhalten") {
                _response.write(JSON.stringify(await(mongoCollection.find().toArray())));
                let cursor: Mongo.Cursor = mongoCollection.find();
                let result: Students[] = await cursor.toArray();
                _response.write("<h2>" + "Serverantwort:" + "</h2>");
                for (let i: number = 0; i < result.length; i++) {
                _response.write("<div>" +
                "<p>" + result[i].vorname + "</p>" +
                "<p>" + result[i].nachname + "</p>" +
                "<p>" + result[i].matrikelnummer + "</p>" +
                "</div>");
                }
            }
            if (url.pathname == "/entfernen") {
                mongoCollection.deleteOne({ "vname": url.query ["vname"], "nname": url.query ["nname"], "mnumber": url.query ["mnumber"]});
            }

        }
        _response.end();
    }
}