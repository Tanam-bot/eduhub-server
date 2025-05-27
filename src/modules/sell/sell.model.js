import { model, Schema } from "mongoose";

const SellSchema = new Schema(
  {
    // add this when user perfectly
    // userID: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User", // Reference to the User model
    //   required: true,
    // },

    title: {
      type: String,
      required: true,
      trim: true,
    },
    authorOrBrand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      min: 0,
    },
    condition: {
      type: String,
      enum: ["New", "Like New", "Used"],
      required: true,
    },
    item: {
      type: String,
      enum: ["Book", "Device"],
      required: true,
    },
    imageURL: {
      type: String, // Store image URL after upload (e.g., to Cloudinary)
    },
  },
  {
    timestamps: true,
  }
);

export const Sell = model("Sell", SellSchema);
