const express = require("Express")
const app = express()
const addForm = require("./public/modules/addform/addForm.js")
app.use("/form", addForm)
app.use("/", express.static('public'))
app.get("*", (req,res) => {
    res.send("Welcome to week 1 assignment home page")
})

app.listen(3000)
