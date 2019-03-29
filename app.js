require("dotenv").config()
const express = require("express")
const path = require("path")
const multer = require("multer")
const DB = require("./modules/database")
const thumbnail = require("./modules/thumbnail")
const spyRouter = require("./routers/spyRouter")
const app = express()

DB.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }:${process.env.DB_PORT}/${process.env.DB_COLLECTION}`,
  app
)

// serve files
app.use(express.static("spy-sites"))

app.use("/modules", express.static("node_modules"))

app.use("/spy", spyRouter)
