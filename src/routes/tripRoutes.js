const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

router.get("/trip", tripController.getTrips);
router.get("/trip/:id", tripController.getTripById);
router.post("/addTrip", tripController.addTrip);
router.put("/trip/:id", tripController.editTrip);
router.delete("/trip/:id", tripController.deleteTrip);

module.exports = router;
