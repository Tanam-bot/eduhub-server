import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photoUrl: {
      type: String,
    },
    blood: {
      type: String,
    },
    varsityName: {
      type: String,
    },
    departmentName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
    },
    Address: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
