const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/authRoutes")

const cors = require("cors");


 require("dotenv").config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api" ,authRoutes);


// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))


// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});