require("../src/db/mongoose")
const User = require("../src/models/user")

//61013a603bfc6b04ec87f165

// User.findByIdAndUpdate("61013a603bfc6b04ec87f165", {age:22}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ age: 22 })
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("61013a603bfc6b04ec87f165",21).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})