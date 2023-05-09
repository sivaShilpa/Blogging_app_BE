const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
  },{timestamps: true});

  const Blog = mongoose.model("Blog", BlogSchema)

  module.exports = Blog
  