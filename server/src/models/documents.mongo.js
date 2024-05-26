const mongoose = require("mongoose");

const documentsSchema = new mongoose.Schema({
  content: {
    type: String,
    code: String,
    required: true,
  },
});

module.exports = mongoose.model("Document", documentsSchema);
