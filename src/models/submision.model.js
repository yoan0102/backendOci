const mongoose = require("mongoose");

const SubmisionSchema = new mongoose.Schema(
  {
    noEntry: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["nueva", "traslado"],
      default: "nueva",
    },
    social_case: {
      type: Boolean,
      default: false,
    },
    motive: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    children: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "children" }],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model < ISubmision > ("submision", SubmisionSchema);
