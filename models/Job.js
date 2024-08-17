const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId, //added a UserId
      ref: 'User', // like foreign key constraint
      required: [true, 'Please provde the User'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
