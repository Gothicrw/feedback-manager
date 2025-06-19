const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST: Submit feedback
router.post("/", async (req, res) => {
  try {
    console.log("💡 Received feedback data:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Missing fields");
      return res.status(400).json({ error: "All fields are required." });
    }

    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    console.log("✅ Feedback saved to MongoDB:", feedback);
    res.status(201).json(feedback);
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Fetch all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Error fetching feedbacks:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ DELETE: Remove feedback by ID
router.delete("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.json({ message: "Feedback deleted successfully" });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
