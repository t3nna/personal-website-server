const mongoose = require("mongoose");

const projectTeamSchema = new mongoose.Schema({
  name: String,
  members: [String],
});

module.exports = { projectTeamSchema };
