import { CreateGoalDto } from "../dtos/goal/create-goal.dto";
import GoalService from "@/services/goal.service";
import { NextFunction, Request, Response } from "express";

class GoalController {
  public goalService = new GoalService();

  public listGoals = (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = this.goalService.listGoals();

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };

  public createGoal = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const goalData: CreateGoalDto = req.body;
      const newGoal = await this.goalService.create(goalData);
      res.json({ newGoal });
    } catch (error) {
      next(error);
    }
  };
}

export default GoalController;
