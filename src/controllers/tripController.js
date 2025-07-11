const tripModel = require("../models/tripModel");

const getTrips = async (req, res) => {
  try {
    const data = await tripModel.getTrips();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching:", error.message);
    res.status(500).json({ error: "Error fetching" });
  }
};

const getTripById = async (req, res) => {
  const id = req.params.id;
  try {
    const trip = await tripModel.getTripById(id);
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error fetching trip:", error.message);
    res.status(500).json({ error: "Error fetching trip" });
  }
};

const addTrip = async (req, res) => {
  const { name, description, startDate, endDate, image } = req.body;

  try {
    const newTrip = await tripModel.addTrip({
      name,
      description,
      startDate,
      endDate,
      image,
    });
    res.status(201).json(newTrip); // Return the created trip
  } catch (error) {
    console.error("Error adding trip:", error.message);
    res.status(500).json({ error: "Error adding trip" });
  }
};

const editTrip = async (req, res) => {
  const id = req.params.id;
  const { name, description, startDate, endDate, image } = req.body;

  try {
    const updatedTrip = await tripModel.editTrip(id, {
      name,
      description,
      startDate,
      endDate,
      image,
    });
    res.status(200).json(updatedTrip);
  } catch (error) {
    console.error("Error editing trip:", error.message);
    res.status(500).json({ error: "Error editing trip" });
  }
};

const deleteTrip = async (req, res) => {
  const id = req.params.id; // Ensure this line is present
  try {
    const deletedTrip = await tripModel.deleteTrip(id);
    if (!deletedTrip) {
      return res
        .status(404)
        .json({ error: "Trip not found or already deleted" });
    }
    res.status(200).json({ message: "Trip deleted successfully", deletedTrip });
  } catch (error) {
    console.error("Error deleting trip:", error.message);
    res
      .status(500)
      .json({ error: "Error deleting trip", details: error.message });
  }
};

module.exports = { getTrips, getTripById, addTrip, editTrip, deleteTrip };
