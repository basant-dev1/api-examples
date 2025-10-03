// index.js
const express = require("express");
const { dbconnection } = require("./dbConnection"); // use centralized db connection
require("dotenv").config();

const app = express();
app.use(express.json());

let myDB = await dbconnection();
let StudentCollection = myDB.collection("EngineeringBlock");

// GET all documents
app.get("/", async (req, res) => {
  try {
     // your collection
    let data = await StudentCollection.find().toArray();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: 0, error: "Database Error" });
  }
});

// POST a new document
app.post("/post", async (req, res) => {
  try {
//     let myDB = await dbconnection();
//     let StudentCollection = myDB.collection("EngineeringBlock"); // your collection

    let obj = {
      bName: req.body.bName,
      issueDate: req.body.issueDate
    };

    let insertRes = await StudentCollection.insertOne(obj);
    res.send({ status: 1, insertRes });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: 0, error: "Insert Error" });
  }
});

// Start server on Render port or default 8000
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
