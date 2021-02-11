const { Schema, model } = require("mongoose");
const schema = new Schema({
  imageUrl: { type: String },
  date: { type: String },
  path: { type: String },
  title: { type: String },
});

module.exports = model("Exhibition", schema);
