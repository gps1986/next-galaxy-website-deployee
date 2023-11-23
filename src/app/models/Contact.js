const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // match: /\S+@\S+\.\S+/,
  },
  phone: {
    type: String,
    required: true,
    // match: /^\+?[0-9\s]+$/i,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;