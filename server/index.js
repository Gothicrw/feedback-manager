const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const feedbackRoutes = require("./routes/feedbackRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/feedbacks", feedbackRoutes);

// ✅ Clean, updated connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
