const Application = require("../models/Application");

/**
 * ➕ Add new application
 * POST /api/applications
 * Private
 */
const addApp = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized, user missing",
      });
    }

    // ✅ SAFE USER ID RESOLUTION
    const userId = req.user._id ? req.user._id : req.user;

    const {
      companyName,
      role,
      jobType,
      location,
      salary,
      source,
      applicationDate,
      deadline,
      priority,
      status,
      recruiterName,
      recruiterEmail,
      notes,
    } = req.body;

    if (!companyName || !role) {
      return res.status(400).json({
        message: "Company name and role are required",
      });
    }

    const application = await Application.create({
      user: userId,
      companyName,
      role,
      jobType,
      location,
      salary,
      source,
      applicationDate: new Date(),

      deadline,
      priority,
      status,
      recruiterName,
      recruiterEmail,
      notes,
    });

    res.status(201).json(application);
  } catch (error) {
    console.error("ADD APPLICATION ERROR 👉", error);
    res.status(500).json({
      message: error.message || "Failed to add application",
    });
  }
};

/**
 * 📥 Get all applications
 */
const getApps = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const userId = req.user._id ? req.user._id : req.user;

    const applications = await Application.find({
      user: userId,
    }).sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    console.error("GET APPLICATIONS ERROR 👉", error);
    res.status(500).json({
      message: "Failed to fetch applications",
    });
  }
};

/**
 * ✏️ Update application
 */
const updateApp = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const userId = req.user._id ? req.user._id : req.user;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedApplication);
  } catch (error) {
    console.error("UPDATE APPLICATION ERROR 👉", error);
    res.status(500).json({
      message: "Failed to update application",
    });
  }
};

/**
 * ❌ Delete application
 */
const deleteApp = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const userId = req.user._id ? req.user._id : req.user;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    await application.deleteOne();
    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("DELETE APPLICATION ERROR 👉", error);
    res.status(500).json({
      message: "Failed to delete application",
    });
  }
};

module.exports = {
  addApp,
  getApps,
  updateApp,
  deleteApp,
};
