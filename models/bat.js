const mongoose = require("mongoose")
const batSchema = mongoose.Schema({
    brand: String,
    types: String,
    cost:{type: Number, min:[80], max:[400] }})
    module.exports = mongoose.model("bat",batSchema)