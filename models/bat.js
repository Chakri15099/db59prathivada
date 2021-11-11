const mongoose = require("mongoose")
const batSchema = mongoose.Schema({
    brand: String,
    types: String,
    cost: Number
})
module.exports = mongoose.model("bat",
batSchema)