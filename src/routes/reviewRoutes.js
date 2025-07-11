const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/review", reviewController.createReview);
router.delete("/review/:id", reviewController.deleteReview);
router.get(
  "/review/directory/:directoryId",
  reviewController.getReviewsByDirectoryId
);

module.exports = router;
