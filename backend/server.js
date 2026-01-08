const express = require("express");
const cors = require("cors");
require("dotenv").config();

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

// Auth routes (login / register)
app.use("/api/auth", authRoutes);

// Protected application routes
app.use("/api/applications", applicationRoutes);

/* -------------------- ERROR HANDLING (BASIC) -------------------- */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

/* -------------------- SERVER -------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
