"use strict"
const spy = require("../models/spies")
const ObjectId = require("mongodb").ObjectId
exports.spy_list_get = () => {
  return spy
    .find()
    .then(spies => {
      return spies
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

exports.spy_create_post = data => {
  return spy
    .create(data)
    .then(item => {
      return { status: "Save OK: " + item.id }
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

exports.spy_number_get = () => {
  return spy
    .find()
    .exec()
    .then(spies => {
      console.log(spies.length)
      return spies.length
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

exports.spy_delete_record = data => {

  return spy
    .findByIdAndRemove(data)
    
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

exports.spy_update_record = data => {

}

