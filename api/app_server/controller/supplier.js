const Supplier = require("../model/supplier");

const createSupplier = (req, res) => {
    const supplier = new Supplier({
        nama: req.body.nama,
        kontak: req.body.kontak,
        address: req.body.address
    });

    supplier.save()
    .then((createdSupplier) => {
        res.status(201).json({
            message: "Supplier berhasil disimpan",
            supplierId: createdSupplier._id
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const readSupplier = (req, res) => {
    Supplier.find()
    .then((documents) => {
        res.status(201).json({
            message: "Get Data Supplier",
            suppliers: documents
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const deleteSupplier = (req, res) => {
    Supplier.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.status(200).json({
            message: "Supplier berhasil dihapus",
            result: result
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "Internal server error!"
        });
    });
};

const updateSupplier = (req, res) => {
    const supplier = new Supplier({
        _id: req.params.id,
        nama: req.body.nama,
        kontak: req.body.kontak,
        address: req.body.address
    });

    Supplier.updateOne({ _id: req.params.id }, supplier)
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

module.exports = {createSupplier, readSupplier, deleteSupplier, updateSupplier};
