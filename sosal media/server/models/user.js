const mongoosh = require("mongoose");

const userSchema = new mongoosh.Schema({
  name: { require: true, type: String },
  email: { require: true, type: String },
  bio: {type: String},
  url: {type: String},
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: ''
  }
});

const newusers = mongoosh.model("user", userSchema);

module.exports = {
  newusers,
};
