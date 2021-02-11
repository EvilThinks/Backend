const { Schema, model } = require("mongoose");
const schema = new Schema({
  imageUrl: { type: String },
  path: { type: String },
  title: { type: String },
  author: { type: String },
  period: { type: String },
  artist: { type: String },
});

module.exports = model("Collection", schema);
