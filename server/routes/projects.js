import express from "express";
import Project from "../models/Project.js"; // Add .js extension

const router = express.Router();

router.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({}, "-__v");
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
