// models/Invoice.js
const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  reservationId: { type: String, unique: true },
  pickupDate: Date,
  returnDate: Date,
  total: Number,
  discountAmount: Number,
  //   collisionDamageWaiver: Boolean,
  collisionDamageWaiverCost: Number,
  dailyRate: Number,
  days: Number,
  discount: String,
  duration: String,
  email: String,
  firstName: String,
  lastName: String,
  //   liabilityInsurance: Boolean,
  liabilityInsuranceCost: Number,
  phone: String,
  //   rentalTax: Boolean,
  rentalTaxCost: Number,
  selectedCar: {
    id: String,
    make: String,
    model: String,
    year: Number,
    type: String,
    seats: Number,
    bags: Number,
    imageURL: String,
    features: [String],
    rates: {
      hourly: Number,
      daily: Number,
      weekly: Number,
    },
  },
  totalDailyCost: Number,
  totalWeeklyCost: Number,
  weeklyRate: Number,
  weeks: Number,
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
