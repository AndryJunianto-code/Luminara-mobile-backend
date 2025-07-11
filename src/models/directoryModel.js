const supabase = require("../config/supabaseClient");

const getDirectories = async () => {
  const { data, error } = await supabase.from("directories").select("*");
  if (error) throw error;
  return data;
};

const searchDirectory = async (query) => {
  const { data, error } = await supabase
    .from("directories")
    .select("*")
    .ilike("name", `%${query}%`);

  if (error) throw error;
  return data;
};

const getDirectoryById = async (id) => {
  const { data, error } = await supabase
    .from("directories")
    .select("*")
    .eq("id", id)
    .single(); // expects one row only

  if (error) throw error;
  return data;
};

module.exports = { getDirectories, searchDirectory, getDirectoryById };
