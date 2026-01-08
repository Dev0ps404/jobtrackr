const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Internship", "Full-time", "Remote"],
      default: "Full-time",
    },
    location: String,
    salary: String,
    source: {
      type: String,
      enum: ["LinkedIn", "Company Website", "Referral", "Other"],
      default: "LinkedIn",
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    deadline: Date,
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Selected", "Rejected"],
      default: "Applied",
    },
    recruiterName: String,
    recruiterEmail: String,
    notes: String,
  },
  { timestamps: true }
);

/* 🔴 THIS LINE IS MOST IMPORTANT */
module.exports = mongoose.model("Application", applicationSchema);
