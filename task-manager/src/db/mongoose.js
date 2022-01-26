const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const me = new User({
//     name : "Kağan",
//     email : "mike@"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error",error)
// })//saving instance the database.

// const task1 = new Task({
//     description:"Read Kozmos",
//     completed:true
// })
// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log("Error",error)
// })