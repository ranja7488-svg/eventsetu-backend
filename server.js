const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

// ✅ CORS allow
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  next();
});

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("EventSetu Backend Running");
});

// ✅ TEST ROUTE (VERY IMPORTANT)
app.get("/test", (req, res) => {
  res.send("Hello from Backend ✅");
});

// ✅ REGISTER ROUTE
app.post("/register", (req, res) => {
  const { name, mobile, city } = req.body;

  if (!name || !mobile || !city) {
    return res.status(400).json({ message: "All fields required" });
  }

  db.query(
    "INSERT INTO users (name, mobile, city) VALUES (?, ?, ?)",
    [name, mobile, city],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "DB Error" });
      }
      res.json({ message: "Registered Successfully (Saved in DB)" });
    }
  );
});


// ✅ BOOKING ROUTE
app.post("/booking", (req, res) => {
  res.json({ message: "Booking Submitted Successfully" });
});

db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(20),
    city VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

app.listen(10000, () => {
  console.log("Server started");
});

