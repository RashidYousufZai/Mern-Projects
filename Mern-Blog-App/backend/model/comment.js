const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },

  postId: {
    type: String,
    required: true
  },
  user_Id: {
    type: String,
    required: true
  },

},{timestamps: true});

module.exports  = mongoose.model("Post", CommentSchema);