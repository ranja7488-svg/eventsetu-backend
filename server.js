const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("EventSetu Backend Running");
});

app.get("/test", (req, res) => {
  res.send("Hello from Backend ✅");
});

app.listen(10000, () => {
  console.log("Server started");
});
