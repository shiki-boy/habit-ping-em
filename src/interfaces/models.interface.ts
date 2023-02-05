import { JwtPayload } from "jsonwebtoken";
import { habitNames, statusChoices } from "./../models/Goal";
import { Model, Schema } from "mongoose";

interface BaseFields {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends BaseFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
}

interface IUserMethods {
  generateAuthToken: () => string;
}

export interface User extends Model<IUser, object, IUserMethods> {
  findByToken: (token: string) => Promise<User>;
}

export interface Goal extends BaseFields {
  description: string;
  habitName: keyof typeof habitNames;
  status: keyof typeof statusChoices;
  points: number;
  date: Date;
  duration: number;
  user: Schema.Types.ObjectId;
}

export interface CustomTokenPayload extends JwtPayload {
  _id: string;
}
