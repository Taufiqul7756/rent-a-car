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

// GET endpoint to check if a reservationId exists
router.get("/invoice/:reservationId", async (req, res) => {
  const { reservationId } = req.params;
  try {
    const invoice = await Invoice.findOne({ reservationId });
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    console.error("Error fetching reservation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint to retrieve all reservations
router.get("/invoice", async (req, res) => {
  try {
    const allInvoices = await Invoice.find();
    res.json(allInvoices);
  } catch (error) {
    console.error("Error fetching all reservations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
