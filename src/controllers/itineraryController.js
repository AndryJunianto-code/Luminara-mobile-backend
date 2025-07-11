const itineraryModel = require("../models/itineraryModel");

const getItinerariesByTripId = async (req, res) => {
  const { tripId } = req.params;
  try {
    const itineraries = await itineraryModel.getItinerariesByTripId(tripId);
    res.status(200).json(itineraries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createItinerary = async (req, res) => {
  try {
    const { trip_id, directory_id, date, start_time, budget, google_map_link } =
      req.body;
    const newItinerary = await itineraryModel.createItinerary({
      trip_id,
      directory_id,
      date,
      start_time,
      budget,
      google_map_link,
    });
    res.status(201).json(newItinerary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateItinerary = async (req, res) => {
  try {
    const updated = await itineraryModel.updateItinerary(
      req.params.id,
      req.body
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItinerary = async (req, res) => {
  try {
    await itineraryModel.deleteItinerary(req.params.id);
    res.status(200).json({ message: "Itinerary deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getItinerariesByTripId,
  createItinerary,
  updateItinerary,
  deleteItinerary,
};
