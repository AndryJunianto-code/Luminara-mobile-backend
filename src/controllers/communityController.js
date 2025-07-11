const communityModel = require("../models/communityModel");

const getCommunities = async (req, res) => {
  try {
    const data = await communityModel.getCommunities();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching:", error.message);
    res.status(500).json({ error: "Error fetching" });
  }
};

const getCommunitiesByReligion = async (req, res) => {
  const { religion } = req.query;

  try {
    const data = await communityModel.getCommunitiesByReligion(religion);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching communities:", error.message);
    res.status(500).json({ error: "Failed to fetch communities" });
  }
};

const addCommunity = async (req, res) => {
  try {
    const { name, religion, whatsappLink, subheading, content } = req.body;
    const newCommunity = await communityModel.addCommunity({
      name,
      agama: religion,
      whatsapp_group_link: whatsappLink,
      subheading,
      content,
    });
    res.status(201).json(newCommunity);
  } catch (error) {
    console.error("Error adding community:", error.message);
    res.status(500).json({ error: "Error adding community" });
  }
};

module.exports = { getCommunities, getCommunitiesByReligion, addCommunity };
