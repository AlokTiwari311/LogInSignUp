const express = require("express");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");

require("dotenv").config();
require("./Models/db");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the authentication API");
});

app.use("/auth", AuthRouter);
console.log("Auth routes mounted");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
