const {MongoClient} = require("mongodb")

let dbconnectionURL = "mongodb://127.0.0.1:27017"

const client = new MongoClient(dbconnectionURL);

let dbconnection = async() =>{
        await client.connect();
        let db = client.db("Library")
        return db;
}

module.exports = {dbconnection}