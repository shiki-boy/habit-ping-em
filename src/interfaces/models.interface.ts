import { habitNames, statusChoices } from "./../models/Goal";

interface BaseFields {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseFields {
  email: string;
  password: string;
  isActive: string;
}

export interface Goal extends BaseFields {
  description: string;
  habitName: keyof typeof habitNames;
  status: keyof typeof statusChoices;
  points: number;
  date: Date;
  duration: number;
}
