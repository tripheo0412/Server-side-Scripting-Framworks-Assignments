const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const multer = require("multer")
const path = require("path")
const Spy = require("../../../database/database.js").Spy
const fs = require("fs")
const moment = require("moment")
const ObjectID = require("mongodb").ObjectID
const sharp = require("sharp")
const exif = require("exif")
const upload = multer({ dest: "../uploads" })
const homePage = require("./viewForm.js")
// const spySchema = database.Schema({
//   id: String,
//   time: Date,
//   category: String,
//   title: String,
//   details: String,
//   coordinate: {
//     lat: String,
//     lng: String
//   },
//   thumbnail: String,
//   image: String,
//   original: String
// })
// const Spy = database.model("Spy", spySchema)

router.get("/addform", (req, res) => {
  res.sendFile(path.join(__dirname + "/addForm.html"))
})

// router.get("/", (req, res) => {
//   Spy.find({ fname: "tri" }, (err, res) => {
//     console.log(res)
//   })
//   res.send("check console")
// })

// for parsing application/json
router.use(bodyParser.json())

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }))
//form-urlencoded

// for parsing multipart/form-data
router.post("/", upload.single("pic"), (req, res) => {
  const tempPath = req.file.path
  const targetPath = path.join(`./uploads/${req.file.originalname}`)
  fs.rename(tempPath, targetPath, err => {
    console.log(err)
  })
  try {
    new exif({ image: `./uploads/${req.file.originalname}` }, function(
      error,
      exifData
    ) {
      if (error) console.log("Error: " + error.message)
      else console.log(exifData) // Do something with your data!
    })
  } catch (error) {
    console.log("Error: " + error.message)
  }
  const spyInfo = req.body
  const objectId = new ObjectID()
  const newSpy = new Spy({
    id: objectId,
    category: spyInfo.category,
    title: spyInfo.title,
    details: spyInfo.details,
    coordinate: {
      lat: "60.258594",
      lng: "24.845570"
    },
    thumbnail: targetPath,
    image: targetPath,
    original: targetPath
  })
  //console.log(newSpy)
  Spy.find((err, res) => {
    console.log("finding")
    console.log(res)
  })
  newSpy.save()
  homePage
  res.sendFile(path.join(__dirname + "/viewForm.html"))
})

module.exports = router
