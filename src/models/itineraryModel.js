const supabase = require("../config/supabaseClient");

const getItinerariesByTripId = async (tripId) => {
  const { data, error } = await supabase
    .from("m_itineraries")
    .select("*, directory:directories(*)")
    .eq("trip_id", tripId);
  if (error) throw error;
  return data;
};

const createItinerary = async (data) => {
  const { data: inserted, error } = await supabase
    .from("m_itineraries")
    .insert([data])
    .select("*");
  console.log(inserted[0]);
  if (error) throw error;
  return inserted[0];
};
const updateItinerary = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("m_itineraries")
    .update(updatedData)
    .eq("id", id)
    .select("*");
  if (error) throw error;
  return data[0];
};

const deleteItinerary = async (id) => {
  const { error } = await supabase.from("m_itineraries").delete().eq("id", id);
  if (error) throw error;
};

module.exports = {
  getItinerariesByTripId,
  createItinerary,
  updateItinerary,
  deleteItinerary,
};
