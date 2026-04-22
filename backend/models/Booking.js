const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customerName: String,
    serviceType: String,
    address: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
