import { NextFunction, Request, Response } from "express";
import { CreateGoalDto } from "../dtos/goal/create-goal.dto";
import GoalService from "@/services/goal.service";
import { RequestWithUser } from "@/interfaces/utils.interface";

class GoalController {
  public goalService = new GoalService();

  public listGoals = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.goalService.listGoals();

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };

  public createGoal = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const goalData: CreateGoalDto = req.body;
      const newGoal = await this.goalService.create(goalData, req.user);
      res.json({ newGoal });
    } catch (error) {
      next(error);
    }
  };
}

export default GoalController;
