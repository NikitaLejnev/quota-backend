const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server up and running!\n")
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
