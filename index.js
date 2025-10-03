let express = require("express")
const { dbconnection } = require("./dbConnection")

let app = express()
app.use(express.json())

app.get("/",async(req,res)=>{
        let myDB = await dbconnection();
        let StudentCollection = myDB.collection("EngineeringBlock")
        let data = await StudentCollection.find().toArray();

        res.send(data)
})

app.post("/post",async(req,res)=>{

        let myDB = await dbconnection();
        let StudentCollection = myDB.collection("EngineeringBlock")
        
        let obj = {
                bName : req.body.bName,
                issueDate : req.body.issueDate,
        }

        let insertRes = await StudentCollection.insertOne(obj)
        let resObj = {
                status : 1,
                insertRes
        }
        res.send(resObj)
        
})

app.listen("8000")