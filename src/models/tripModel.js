const supabase = require("../config/supabaseClient");

const getTrips = async () => {
  const { data, error } = await supabase.from("trips").select("*");
  if (error) throw error;
  return data;
};

const getTripById = async (id) => {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", id)
    .single(); // returns single object instead of array

  if (error) throw error;
  return data;
};

const addTrip = async (tripData) => {
  const { name, description, startDate, endDate, image } = tripData;
  // Insert the trip into the database
  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        name,
        description,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        image,
      },
    ])
    .select();
  if (error) throw error;
  return data[0]; // Return the newly created trip
};

const editTrip = async (id, tripData) => {
  const { name, description, startDate, endDate, image } = tripData;

  const { data, error } = await supabase
    .from("trips")
    .update({
      name,
      description,
      image,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) throw error;
  return data[0];
};

const deleteTrip = async (id) => {
  const { data, error } = await supabase
    .from("trips")
    .delete()
    .eq("id", id)
    .select(); // You can choose to return the deleted trip data if needed
  if (error) throw error;
  return data; // Return the deleted trip data or a success message
};

module.exports = { getTrips, getTripById, addTrip, editTrip, deleteTrip };
