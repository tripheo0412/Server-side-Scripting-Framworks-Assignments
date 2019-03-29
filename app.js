require("dotenv").config()
const express = require("express")
const DB = require("./modules/database")
const spyRouter = require("./routers/spyRouter")
const app = express()
// app.enable('trust proxy')
// app.use ((req, res, next) => {
//   if (req.secure) {
//     // request was via https, so do no special handling
//     next();
//   } else {
//     // request was via http, so redirect to https
//     res.redirect('https://' + req.headers.host + req.url);
//   }
// })
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
