import { CreateGoalDto } from "../dtos/goal/create-goal.dto";
import { Goal } from "./../interfaces/models.interface";
import goalModel from "@/models/Goal";

class GoalService {
  public async listGoals(): Promise<Goal[]> {
    return goalModel.find();
  }

  public async create(data: CreateGoalDto): Promise<Goal> {
    console.log({ data });
    return goalModel.create(data);
  }
}

export default GoalService;
