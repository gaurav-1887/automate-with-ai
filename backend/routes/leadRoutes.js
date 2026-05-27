const express = require("express");

const router = express.Router();

const leadController = require("../controllers/leadController");

const protectAdmin = require("../middleware/authMiddleware");


// CREATE LEAD

router.post(

  "/create",

  leadController.createLead

);


// GET ALL LEADS

router.get(

  "/all",

  protectAdmin,

  leadController.getAllLeads

);

router.delete(

  "/delete/:id",

  protectAdmin,

  leadController.deleteLead

);

// DELETE LEAD

router.delete(

  "/:id",

  protectAdmin,

  leadController.deleteLead

);


module.exports = router;