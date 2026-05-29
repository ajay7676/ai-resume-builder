const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

 require("dotenv").config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json)

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});