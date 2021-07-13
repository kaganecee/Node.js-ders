const express = require("express")

const app = express()

app.get("",(req,res)=>{
    res.send("<h1>Weather</h1>")//send back a html page.
})

app.get("/help",(req,res)=>{
    res.send({
        name:Kağan,
        age:21
    })//send back json
})

app.get("/weather",(req,res)=>{
    res.send({
        forecast:"Cloudly",
        location:"Bolu,Turkey"
    })
})

app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>")
})

app.listen(3000,()=>{
    console.log("Server is up on port 3000.")
})