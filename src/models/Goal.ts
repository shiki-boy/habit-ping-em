import { model, Schema, Document } from "mongoose";
import { Goal } from "@interfaces/models.interface";
import userModel from "./User";

export const habitNames = {
  W: "Work Out",
  S: "Sleep",
  R: "Reading",
  F: "Eat Food",
  D: "Diet",
  A: "Art",
  M: "Music",
  T: "Travel",
  G: "Gaming",
};

export const statusChoices = {
  N: "Not Started",
  P: "Pending",
  C: "Completed",
};

const ObjectId = Schema.Types.ObjectId;

const goalSchema: Schema = new Schema(
  {
    status: {
      type: String,
      enum: Object.keys(statusChoices),
    },
    habitName: {
      type: String,
      enum: Object.keys(habitNames),
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    duration: {
      // in minutes
      type: Number,
      min: 0,
    },
    points: {
      type: Number,
      min: 0,
    },
    user: {
      type: ObjectId,
      ref: userModel,
      required: true,
      // validate: {
      //   validator: (userId: string) => {
      //     return false;
      //   },
      //   message: "No such user",
      // },
    },
  },
  { timestamps: true }
);

const goalModel = model<Goal & Document>("Goal", goalSchema);

export default goalModel;
