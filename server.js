const express = require("express");
const app = express();

// allow JSON
app.use(express.json());

// CORS allow
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("EventSetu Backend Running");
});

// 🔥 REGISTER API
app.post("/register", (req, res) => {
  const { name, mobile, city } = req.body;

  if (!name || !mobile || !city) {
    return res.status(400).json({ message: "All fields required" });
  }

  res.json({
    message: "Registered Successfully",
    user: { name, mobile, city }
  });
});

app.listen(10000, () => {
  console.log("Server started");
});
