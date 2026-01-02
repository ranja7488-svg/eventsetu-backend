const express = require("express");
const app = express();

// ✅ CORS allow for all
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
