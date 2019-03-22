const Spy = require("../../database/database.js").Spy
Spy.find((err,res)=> {
    console.log(res)
})