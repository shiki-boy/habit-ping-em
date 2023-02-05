import { z } from "zod";
import { statusChoices, habitNames } from "@/models/Goal";

const statusChoiceValidChoices = Object.keys(statusChoices) as [
  string,
  ...string[]
];

const habitNamesValidChoices = Object.keys(habitNames) as [string, ...string[]];

export const CreateGoalObject = z.object({
  status: z.enum(statusChoiceValidChoices),
  description: z.string(),
  habitName: z.enum(habitNamesValidChoices),
  points: z.number().positive(),
  duration: z.number().positive(),
  date: z.string().datetime(),
  // user: z.instanceof(Schema.Types.ObjectId),
});

export type CreateGoalDto = z.infer<typeof CreateGoalObject>;
