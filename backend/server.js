require("dns").setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES

const authRoutes = require("./routes/authRoutes");
const leadRoutes = require("./routes/leadRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);


// TEST

app.get("/", (req, res) => {

  res.send("Automate With AI Backend Running 🚀");

});


// START

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected ✅");

  app.listen(5000, () => {

    console.log("Server running on port 5000");

  });

})

.catch((err) => {

  console.log(err);

});