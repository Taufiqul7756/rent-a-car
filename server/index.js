// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const invoiceRoutes = require("./routes/invoiceRoutes");

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
app.use("/api", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Car Reservation API's");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
