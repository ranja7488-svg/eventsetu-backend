const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("EventSetu Backend Running");
});

app.listen(10000, ()=>{
  console.log("Server started");
});
