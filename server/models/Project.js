const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "No description available." },
  techStack: { type: [String], default: [] },
  githubLink: { type: String, default: null },
  liveDemo: { type: String, default: null },
  image: { type: String, default: "https://via.placeholder.com/150" },
  category: { type: String, default: "Uncategorized" },
  features: { type: [String], default: [] },
  date: { type: String, default: new Date().toISOString().split("T")[0] },
  tags: { type: [String], default: [] },
});

module.exports = mongoose.model("Project", ProjectSchema);
