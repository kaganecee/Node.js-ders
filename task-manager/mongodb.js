// CRUD create read update delete

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

// const { MongoClient, ObjectID} = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"


MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)

    //insert data(CREATE)

    // db.collection("users").insertOne({
    //     name:"Onur",
    //     age:25
    // }, (error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection("users").insertMany([
    //     {
    //         name:"Doğa",
    //         age:19
    //     },{
    //         name:"Me",
    //         age:21
    //     }
    // ],(error,result) => {
    //     if(error){
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(result.insertedCount)
    // })

    // db.collection("users").findOne({name:"Onur",age:21},(error,user)=>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }

    //     console.log(user)
    // })

    //READ

    // db.collection("users").find({age:19}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection("tasks").find({completed:true}).toArray((error,info)=>{
    //     console.log(info)
    // })

    // db.collection("tasks").findOne({ _id: new ObjectID("60fc27b258b3a8b130a75335")},(error,task)=>{
    //     console.log(task)
    // })

    //UPDATE

    // db.collection("users").updateOne({
    //     _id: new ObjectID("60fe8ebc2ea99f3c9267488d")
    // },{
    //     $set:{
    //         name:"Tuğba",
    //         age:20
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch(()=>{
    //     console.log(error)
    // })//promises

    // db.collection("users").updateOne({
    //     _id: new ObjectID("60fe8ebc2ea99f3c9267488d")
    // },{
    //     $inc:{
    //         age:-1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({  },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // DELETE

    // db.collection("users").deleteOne({
    //     name:"Onur"
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})

