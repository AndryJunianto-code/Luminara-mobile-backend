const directoryModel = require("../models/directoryModel");

const getDirectories = async (req, res) => {
  try {
    const data = await directoryModel.getDirectories();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching:", error.message);
    res.status(500).json({ error: "Error fetching" });
  }
};

const searchDirectory = async (req, res) => {
  const query = req.query.q;

  try {
    const results = await directoryModel.searchDirectory(query);
    res.status(200).json(results);
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ error: "Search failed" });
  }
};

const getDirectoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const directory = await directoryModel.getDirectoryById(id);
    res.status(200).json(directory);
  } catch (error) {
    console.error("Error fetching directory:", error.message);
    res.status(500).json({ error: "Error fetching directory" });
  }
};

module.exports = { getDirectories, searchDirectory, getDirectoryById };
