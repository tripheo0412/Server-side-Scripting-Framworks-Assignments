const express = require("express")
const path = require("path")
const router = express.Router()
const Spy = require("../../../database/database.js").Spy
router.get("/",(req,res) => {
    Spy.find((err,res)=> {
        res.forEach((post) => {
            let img = document.createElement("IMG")
            img.setAttribute("src",post.original)
            img.setAttribute("width","600")
            img.setAttribute("height","400")
            let element = document.getElementById("gallery")
            element.appendChild(img)
            let title = document.createElement("p")
            title.setAttribute("class", "title")
            let nodeTitle = document.createTextNode(post.title)
            title.appendChild(nodeTitle)
            element.appendChild(title)
            let desc = document.createElement("p")
            desc.setAttribute("class", "desc")
            let nodeDesc = document.createTextNode(post.details)
            desc.appendChild(nodeDesc)
            element.appendChild(desc)
            
        });
    
        console.log("////////////////////////////////////////////////////")
        
    }) 
    res.sendFile(path.join(__dirname + "/viewForm.html"))
})
module.exports = router