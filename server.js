const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Elevate Labs DevOps Project: Mission accomplished and awaiting the next challenge! 🎯");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
