require("dotenv").config()
const mongoose = require("mongoose")
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
      process.env.DB_HOST
    }:${process.env.DB_PORT}/${process.env.DB_COLLECTION}`
  )
  .then(
    () => {
      console.log("Connection OK")
    },
    err => {
      console.log(err)
    }
  )
  const spySchema = mongoose.Schema({
    id: String,
    time: Date,
    category: String,
    title: String,
    details: String,
    coordinate: {
      lat: String,
      lng: String
    },
    thumbnail: String,
    image: String,
    original: String
  })
  const Spy = mongoose.model("Spy", spySchema)



  module.exports = {mongoose, Spy}