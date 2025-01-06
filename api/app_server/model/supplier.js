const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    kontak : {type : String, required : true},
    address : {type : String, required : true}
});

module.exports = mongoose.model("Supplier", supplierSchema);
