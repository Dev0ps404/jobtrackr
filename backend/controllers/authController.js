const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

/* 🔥 TEMP HARDCODE GOOGLE CLIENT ID (DEBUG) */
const GOOGLE_CLIENT_ID =
  "PASTE_YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com";

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

/* =========================
   🔐 REGISTER
========================= */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      provider: "local",
    });

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Register failed" });
  }
};

/* =========================
   🔐 LOGIN
========================= */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "debugsecret",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
};

/* =========================
   🔐 GOOGLE LOGIN (FINAL DEBUG)
========================= */
exports.googleLogin = async (req, res) => {
  try {
    console.log("GOOGLE LOGIN HIT ✅");

    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ message: "Missing credential" });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        photo: picture,
        provider: "google",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "debugsecret",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
      },
    });
  } catch (err) {
    console.error("GOOGLE VERIFY ERROR 👉", err);
    res.status(401).json({ message: "Google login failed" });
  }
};
