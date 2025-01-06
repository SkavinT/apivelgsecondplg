const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    kontak : {type : String, required : true},
    address : {type : String, required : true}
});

module.exports = mongoose.model("Customer", customerSchema);
