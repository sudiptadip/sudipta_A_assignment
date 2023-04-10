const mongoosh = require("mongoose");

const postSchema = new mongoosh.Schema({
  title: String,
  content: String,
  user_id: String,
  name: String,
  imgUrl: String,
  avtarUrl: { type: String },
  type: { type: String },
  template: { type: String },
  likes: {
    type: [String],
    default: [],
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: ''
  }
});

const PostMessage = mongoosh.model("PostMessage", postSchema);

module.exports = { PostMessage };