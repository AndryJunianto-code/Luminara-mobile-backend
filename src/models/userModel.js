const supabase = require("../config/supabaseClient");

const registerUser = async ({ email, username, password }) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, username, password }])
    .select()
    .single();
  if (error) console.log(error);
  return data;
};

const loginUser = async ({ email, password }) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();
  if (error) throw error;
  return data;
};

module.exports = { registerUser, loginUser };
