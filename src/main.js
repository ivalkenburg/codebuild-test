require("dotenv").config();

const app = require("express")();

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.listen(process.env.EXPRESS_PORT, () => {
  console.log("Listening on port: " + process.env.EXPRESS_PORT);
});
