
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
