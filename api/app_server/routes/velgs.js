var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const VelgController = require("../controller/velg");

//insert
router.post("/", checkAuth, VelgController.createVelg);

//select
router.get("/", checkAuth, VelgController.readVelg);

//delete
router.delete("/:id", checkAuth, VelgController.deleteVelg);

//update
router.put("/:id", checkAuth, VelgController.updateVelg);

module.exports = router;
