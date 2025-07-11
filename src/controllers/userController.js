const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const user = await userModel.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error register" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.loginUser(req.body);
    console.log(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };
