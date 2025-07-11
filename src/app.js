const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client

// Middleware
app.use(express.json());

const directoryRoutes = require("./routes/directoryRoutes");
const tripRoutes = require("./routes/tripRoutes");
const communityRoutes = require("./routes/communityRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const uploadImageRoutes = require("./routes/uploadImageRoutes");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Luminara API" });
});

// Use routes
app.use("/api", directoryRoutes);
app.use("/api", tripRoutes);
app.use("/api", communityRoutes);
app.use("/api", userRoutes);
app.use("/api", reviewRoutes);
app.use("/api", itineraryRoutes);
app.use("/api", uploadImageRoutes);

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
