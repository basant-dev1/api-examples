// dbConnection.js
const { MongoClient } = require("mongodb");
require("dotenv").config();

const dbconnectionURL = process.env.MONGO_URI; // Atlas URI from env
const client = new MongoClient(dbconnectionURL);

let dbconnection = async () => {
  if (!client.topology?.isConnected()) {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
  }
  const db = client.db("Library_Management"); // Your DB name
  return db;
};

module.exports = { dbconnection };
