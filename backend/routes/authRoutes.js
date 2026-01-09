const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  googleLogin, // ✅ IMPORT PROPERLY
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleLogin); // ✅ SAFE

module.exports = router;
