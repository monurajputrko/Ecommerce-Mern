const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: Number },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  mobile: {
    type: String,
    required: true, // Corrected property name from 'require' to 'required'
  },
});

const Address = mongoose.model("addresses", AddressSchema);

module.exports = Address;
