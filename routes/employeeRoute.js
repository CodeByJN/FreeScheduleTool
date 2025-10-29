const express = require("express");
const router = express.Router();
const db = require("../controller/employeeController");

router.get("/", db.getEmployee);
router.get("/:id", db.getEmployeeById);
router.post("/", db.createEmployee);

router.get("/", (req, res) => {
  console.log("Employee page");
  res.render("employee");
});

module.exports = router;
