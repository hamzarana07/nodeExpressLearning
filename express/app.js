const express = require("express");
const app = express();
const data = require("./data");

app.use(express.static("./methods-public"))

app.get("/api/people", (req,res)=>{
    res.status(200).json({success:true, data:data.people})
})

app.use(express.urlencoded({extended:false}))

app.post("/login", (req,res)=>{
    const {name} = req.body;
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please provide credentials")
})

app.listen(5000, () => {
  console.log("Server running at: http://localhost:5000");
});
