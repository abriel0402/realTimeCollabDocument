const mongoose = require("mongoose");

const documentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Document", documentsSchema);
