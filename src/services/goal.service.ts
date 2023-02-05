import { CreateGoalDto } from "../dtos/goal/create-goal.dto";
import { Goal, User } from "./../interfaces/models.interface";
import goalModel from "@/models/Goal";

class GoalService {
  public async listGoals(): Promise<Goal[]> {
    return goalModel.find();
  }

  public async create(data: CreateGoalDto, user: User): Promise<Goal> {
    return goalModel.create({ ...data, user });
  }
}

export default GoalService;
