const express = require("express");
const router = express.Router();
const itineraryController = require("../controllers/itineraryController");

router.get("/itinerary/:tripId", itineraryController.getItinerariesByTripId);
router.post("/itinerary", itineraryController.createItinerary);
router.put("/itinerary/:id", itineraryController.updateItinerary);
router.delete("/:id", itineraryController.deleteItinerary);

module.exports = router;
