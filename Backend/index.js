const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./Database/db"); // Make sure your db file is correctly set up

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev")); // Logs incoming requests
app.use(bodyParser.json()); // Parses JSON request bodies

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the User Portfolio API!");
});

// Add User Route
app.post("/addUser", (req, res) => {
  const { name, rollno, portfolio_link } = req.body;

  // Check if the roll number already exists
  db.query(
    "SELECT * FROM userCard WHERE rollno = ?",
    [rollno],
    (err, existingUser) => {
      if (err) {
        console.error("Error checking existing user:", err);
        return res.status(500).json({ error: "Server error" });
      }

      if (existingUser.length > 0) {
        return res
          .status(400)
          .json({ error: "User already exists with this roll number." });
      }

      // Insert the new user
      db.query(
        "INSERT INTO userCard (name, rollno, portfolio_link) VALUES (?, ?, ?)",
        [name, rollno, portfolio_link],
        (err, result) => {
          if (err) {
            console.error("Error inserting user into the database:", err);
            return res.status(500).json({ error: "Failed to add user" });
          }
          res.status(201).json({ message: "User added successfully!" });
        }
      );
    }
  );
});

//delete the user
app.delete("/deleteuser", (req, res) => {
  const { rollno } = req.body;

  db.query("DELETE FROM userCard WHERE rollno = ?", [rollno], (err, result) => {
    if (err) {
      console.error("Error deleting user from the database:", err);
      return res.status(500).json({ error: "Failed to delete user" });
    }
    res.status(200).json({ message: "User deleted successfully!" });
  });
});

//update votes
app.put("/upvote", (req, res) => {
  const { rollno } = req.body;

  db.query(
    "UPDATE userCard SET votes = votes + 1 WHERE rollno = ?",
    [rollno],
    (err, result) => {
      if (err) {
        console.error("Error updating votes:", err);
        return res.status(500).json({ error: "Failed to update votes" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "Vote increased successfully!" });
    }
  );
});

// Get All Users Route
app.get("/see", (req, res) => {
  db.query("SELECT * FROM userCard ORDER BY created_at DESC", (err, result) => {
    if (err) {
      console.error("Error fetching data from the database:", err);
      return res.status(500).json({ error: "Failed to retrieve users" });
    } else {
      console.log("Result from DB:", result);
      res.status(200).json(result);
    }
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
