const supabase = require("../config/supabaseClient");

const getCommunities = async () => {
  const { data, error } = await supabase.from("communities").select("*");
  if (error) throw error;
  return data;
};

const getCommunitiesByReligion = async (religion) => {
  let query = supabase.from("communities").select("*");
  if (religion) {
    query = query.eq("agama", religion.toString());
  }
  const { data, error } = await query;

  if (error) throw error;
  return data;
};

const addCommunity = async (communityData) => {
  const { name, agama, whatsapp_group_link, subheading, content } =
    communityData;
  const { data, error } = await supabase
    .from("communities")
    .insert([
      {
        name,
        agama,
        whatsapp_group_link,
        subheading,
        content,
      },
    ])
    .select();
  if (error) throw error;
  return data[0];
};

module.exports = { getCommunities, getCommunitiesByReligion, addCommunity };
