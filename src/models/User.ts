import { model, Schema, Document } from "mongoose";
import { User } from "@interfaces/models.interface";

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const userModel = model<User & Document>("User", userSchema);

export default userModel;
