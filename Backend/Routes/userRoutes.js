const express = require("express");
const db = require("../Database/db"); // Import the database connection

const router = express.Router();

// ✅ INSERT: Add a new portfolio
router.post("/add", (req, res) => {
    const { name, rollno, portfolio_link, image_link } = req.body;

    if (!name || !rollno || !portfolio_link) {
        return res.status(400).json({ message: "Missing required fields ❌" });
    }

    const sql = "INSERT INTO userCard (name, rollno, portfolio_link, image_link) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, rollno, portfolio_link, image_link], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error ❌", error: err });
        }
        res.status(201).json({ message: "Portfolio added successfully ✅", data: result });
    });
});

// ✅ GET: Fetch all portfolios
router.get("/all", (req, res) => {
    const sql = "SELECT * FROM userCard";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error ❌", error: err });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
