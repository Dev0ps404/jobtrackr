const express = require("express");
const cors = require("cors");
const path = require("path");

/* 🔥 FORCE DOTENV LOAD */
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

console.log("ENV CHECK 👉", {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  JWT_SECRET: process.env.JWT_SECRET ? "OK" : "MISSING",
  MONGO_URI: process.env.MONGO_URI ? "OK" : "MISSING",
});

// Database connection
const connectDB = require("./config/db");

// Routes
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- DATABASE -------------------- */
connectDB();

/* -------------------- ROUTES -------------------- */

// Test route
app.get("/", (req, res) => {
  res.send("JobTrackr Backend is running 🚀");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Application routes
app.use("/api/applications", applicationRoutes);

/* -------------------- ERROR HANDLING -------------------- */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

/* -------------------- SERVER -------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
