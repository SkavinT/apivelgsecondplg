var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const CustomerController = require("../controller/customer");

router.post("/customer", checkAuth, CustomerController.createCustomer);

router.get("/customer", checkAuth, CustomerController.readCustomer);

router.delete("/customer/:id", checkAuth, CustomerController.deleteCustomer);

router.put("/customer/:id", checkAuth, CustomerController.updateCustomer);

module.exports = router;