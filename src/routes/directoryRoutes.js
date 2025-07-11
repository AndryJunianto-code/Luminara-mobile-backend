const express = require("express");
const router = express.Router();
const directoryController = require("../controllers/directoryController");

router.get("/directory", directoryController.getDirectories);
router.get("/directory/search", directoryController.searchDirectory);
router.get("/directory/:id", directoryController.getDirectoryById);

module.exports = router;
