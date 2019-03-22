const Spy = require("../../database/database.js").Spy
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
        element.appendChild(desc)
        
    });

    console.log("////////////////////////////////////////////////////")
    console.log(res)
})