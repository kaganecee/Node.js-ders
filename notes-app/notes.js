const fs = require("fs")
const chalk = require("chalk")

const addNote =  (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.bgGreen("Note removed!"))
    }else{
        console.log(chalk.bgRed("Note doesn't exist!"))
    }
    saveNotes(notesToKeep)
}
const listNotes =  ()=>{
    const notes = loadNotes()
    console.log(chalk.magenta.bgYellow("Your notes"))

    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const readNote =  (title)=>{
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    if(findNote){
        notes.forEach((note)=>{
            console.log(chalk.cyan.bgWhite("Title: " + note.title + " Body: " + note.body))
        })
    }else{
        console.log(chalk.red.bgWhite("No note found!"))
    }
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}
module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}