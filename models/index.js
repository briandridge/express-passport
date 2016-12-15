var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/spotify");

module.exports.Cargo = require('./cargoModel');