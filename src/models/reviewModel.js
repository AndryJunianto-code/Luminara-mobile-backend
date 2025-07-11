const supabase = require("../config/supabaseClient");

const createReview = async (review) => {
  const { user_id, directory_id, rating, review_text } = review;
  const { data, error } = await supabase
    .from("reviews")
    .insert([{ user_id, directory_id, rating, review_text }])
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

const deleteReview = async (id) => {
  const { data, error } = await supabase
    .from("reviews")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const getReviewsByDirectoryId = async (directory_id) => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*, users(username)") // join user for username
    .eq("directory_id", directory_id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

module.exports = {
  createReview,
  deleteReview,
  getReviewsByDirectoryId,
};
