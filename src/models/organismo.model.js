const mongoose = require('mongoose');

const OrganismoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priorizado: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: Number,
      default: 8,
    },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('organismo', OrganismoSchema);
