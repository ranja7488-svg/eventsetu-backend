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
  res.json({ message: "Registered Successfully" });
});

// ✅ BOOKING ROUTE
app.post("/booking", (req, res) => {
  res.json({ message: "Booking Submitted Successfully" });
});

app.listen(10000, () => {
  console.log("Server started");
});
