const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

yargs.version("1.0.0")

yargs.command({
    command:"add",
    describe: "Add a new note",
    builder: {
        title:{
            describe: "Note title",
            // demandOption:true zorunlu olması
            type:"string"
        },
        body:{
            describe: "Note body",
            demandOption:true,
            type:"string"
        }

    }, //object,özellikleri tutuyoruz.
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
}).command({
    command:"remove",
    describe: "Remove a note",
    builder:{
        title:{
            demandOption:true,
            describe:"Remove a note!"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}).command({
    command:"read",
    describe: "Read notes",
    builder: {
        title:{
            describe: "Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
}).command({
    command:"list",
    describe: "List notes",
    handler(){
        notes.listNotes()
    }
})
yargs.parse()
