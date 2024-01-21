const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  level: {
    type: Number,
    default: 1, // Provide a default value or adjust according to your requirements
    // required: true, // Optional: If you want to make it optional
  },
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
