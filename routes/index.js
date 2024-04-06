const express = require("express");
const router = express.Router();

const Plan = require("../models/Plan");
//
//// Protected Routes
//

/*
  Workout page
*/

// Get All Plans
router.get("/plans");
// Get Plan Details
router.get("/:planID");
// Create New Plan
router.post("/plans");
// Set User Chosen Plan
router.post("/:userID/plan");
// Get All Exercises from bank during planning process
router.get("/bank");
// Save exercise log to chosen plan
router.post("/:userID/:planID/:sessionID");

// Offline options

// Save recorded sessions
router.post("/:userID/:planID");

module.exports = router;
