require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndRemove("61013bbd99157f31b005814a").then((task)=>{
//     console.log(task)
//     return Task.countDocuments( {completed:false} )
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments( {completed:true})
    return count
}
deleteTaskAndCount("610274c20e2a242028e7c8ae").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})