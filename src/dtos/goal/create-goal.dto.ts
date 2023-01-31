import { z } from "zod";
import { statusChoices } from "./../../models/Goal";

const statusChoiceValidChoices = Object.keys(statusChoices) as [
  string,
  ...string[]
];

export const CreateGoalObject = z.object({
  status: z.enum(statusChoiceValidChoices),
  description: z.string(),
  habitName: z.string(),
  points: z.number().positive(),
  duration: z.number().positive(),
  date: z.string().datetime(),
});

export type CreateGoalDto = z.infer<typeof CreateGoalObject>;
