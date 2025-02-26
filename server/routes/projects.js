const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({}, "-__v");
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
