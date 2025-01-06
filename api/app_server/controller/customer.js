const Customer = require("../model/customer");

const createCustomer = (req, res) => {
    const customer = new Customer({
        nama: req.body.nama,
        kontak: req.body.kontak,
        address: req.body.address
    });

    customer.save()
    .then((createdCustomer) => {
        res.status(201).json({
            message: "Customer berhasil disimpan",
            customerId: createdCustomer._id
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const readCustomer = (req, res) => {
    Customer.find()
    .then((documents) => {
        res.status(201).json({
            message: "Get Data Customer",
            customers: documents
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const deleteCustomer = (req, res) => {
    Customer.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.status(200).json({
            message: "Customer berhasil dihapus",
            result: result
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const updateCustomer = (req, res) => {
    const customer = new Customer({
        _id: req.params.id,
        nama: req.body.nama,
        kontak: req.body.kontak,
        address: req.body.address
    });

    Customer.updateOne({ _id: req.params.id }, customer)
    .then((hasil) => {
        res.status(200).json({
            message: "Update Berhasil",
            result: hasil
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

module.exports = { createCustomer, readCustomer, deleteCustomer, updateCustomer };
