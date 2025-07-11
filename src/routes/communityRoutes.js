const express = require("express");
const router = express.Router();
const communityController = require("../controllers/communityController");

router.get("/community", communityController.getCommunities);
router.get("/community/religion", communityController.getCommunitiesByReligion);
router.post("/community", communityController.addCommunity);

module.exports = router;
