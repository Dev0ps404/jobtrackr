const express = require("express");
const {
  addApp,
  getApps,
  updateApp,
  deleteApp,
} = require("../controllers/applicationController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, addApp)
  .get(protect, getApps);

router.route("/:id")
  .put(protect, updateApp)
  .delete(protect, deleteApp);

module.exports = router;
