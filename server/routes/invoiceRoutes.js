// routes/invoiceRoutes.js
const express = require("express");
const router = express.Router();
const Invoice = require("../models/invoice");

router.post("/invoice", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(201).send(newInvoice);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// GET endpoint to check if a reservationId exists
router.get("/invoice/:reservationId", async (req, res) => {
  const { reservationId } = req.params;
  try {
    const invoiceExists = await Invoice.exists({ reservationId });
    res.json({ exists: invoiceExists });
  } catch (error) {
    console.error("Error checking reservationId:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
