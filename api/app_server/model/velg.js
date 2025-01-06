const mongoose = require("mongoose");

const velgSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    tipe : {type : String, required : true},
    brand : {type : String, required : true}
});

module.exports = mongoose.model("Velg", velgSchema);
