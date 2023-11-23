const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pickupFrom: {
    type: String,
    required: true,
  },
  deliveryTo: {
    type: String,
    required: true,
  },
  shiftingDate: {
    type: Date,
    required: true,
  },
  bookingType: {
    type: String,
    required: true,
    enum: ['HouseHold Shifting', 'Office Relocation', 'Furniture Shifting', 'Car Relocation', 'Bike Relocation'],
  },
  subBookingType: {
    type: String,
    enum: ['One BHK', 'Two BHK', 'Three BHK', 'Four BHK', 'Five BHK', 'HouseHold With Car/Bike'],
    required: function () {
      return this.bookingType === 'HouseHold Shifting';
    },
  },
});

// Middleware to set subBookingType based on bookingType
bookingSchema.pre('save', function (next) {
  if (this.bookingType !== 'HouseHold Shifting') {
    this.subBookingType = this.bookingType;
  }
  // If bookingType is 'HouseHold Shifting', keep subBookingType as it is
  next();
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
