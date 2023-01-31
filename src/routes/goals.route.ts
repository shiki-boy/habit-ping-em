import { CreateGoalObject } from "./../dtos/goal/create-goal.dto";
import { Router } from "express";
import { Routes } from "@interfaces/routes.interface";
import GoalController from "@/controllers/goal.controller";
import { validateRequest } from "@/middlewares/validateRequest.middleware";

class GoalsRoute implements Routes {
  public path = "/goals";
  public router = Router();
  public goalController = new GoalController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.goalController.listGoals);

    this.router.post(
      `${this.path}/create`,
      validateRequest({ body: CreateGoalObject }),
      this.goalController.createGoal
    );
  }
}

export default GoalsRoute;
