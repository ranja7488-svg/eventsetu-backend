const express = require("express");
const app = express();

// 🔥 CORS allow (important)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("EventSetu Backend Running");
});

app.get("/test", (req, res) => {
  res.send("Hello from Backend ✅");
});

app.listen(10000, () => {
  console.log("Server started");
});
