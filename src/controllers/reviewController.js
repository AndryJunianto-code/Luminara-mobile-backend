const reviewModel = require("../models/reviewModel");

const createReview = async (req, res) => {
  try {
    const review = await reviewModel.createReview(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: "Failed to create review" });
  }
};

const deleteReview = async (req, res) => {
  try {
    const deleted = await reviewModel.deleteReview(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete review" });
  }
};

const getReviewsByDirectoryId = async (req, res) => {
  try {
    const reviews = await reviewModel.getReviewsByDirectoryId(
      req.params.directoryId
    );
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to get reviews" });
  }
};

module.exports = { createReview, deleteReview, getReviewsByDirectoryId };
