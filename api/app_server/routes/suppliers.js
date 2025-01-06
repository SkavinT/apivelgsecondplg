var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const SupplierController = require("../controller/supplier");

router.post("/supplier", checkAuth, SupplierController.createSupplier);

router.get("/supplier", checkAuth, SupplierController.readSupplier);

router.delete("/supplier/:id", checkAuth, SupplierController.deleteSupplier);

router.put("/supplier/:id", checkAuth, SupplierController.updateSupplier);

module.exports = router;