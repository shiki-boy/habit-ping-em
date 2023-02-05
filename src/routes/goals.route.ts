import { Router } from "express";

import { CreateGoalObject } from "@/dtos/goal/create-goal.dto";
import { Routes } from "@interfaces/routes.interface";
import GoalController from "@/controllers/goal.controller";
import { validateRequest } from "@/middlewares/validateRequest.middleware";
import authenticate from "@/middlewares/authenticate";

class GoalsRoute implements Routes {
  public path = "/goals";
  public router = Router();
  public goalController = new GoalController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authenticate,
      this.goalController.listGoals
    );

    this.router.post(
      `${this.path}/create`,
      authenticate,
      validateRequest({ body: CreateGoalObject }),
      this.goalController.createGoal
    );
  }
}

export default GoalsRoute;
