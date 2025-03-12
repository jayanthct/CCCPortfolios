const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv/config");
require("./Database/db");

const userRoutes = require("./Routes/userRoutes"); // Import Routes


app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
