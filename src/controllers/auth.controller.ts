import { SignupFormDto } from "./../dtos/auth/register.dto";
import { LoginFormDto } from "./../dtos/auth/login.dto";
import { NextFunction, Request, Response } from "express";
import AuthService from "@/services/auth.service";

class AuthController {
  public authService = new AuthService();

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // check username, password
      const data: LoginFormDto = req.body;
      const responseData = await this.authService.findUser(data);

      res.json(responseData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // check username, password
      const data: SignupFormDto = req.body;
      const responseData = await this.authService.createUser(data);

      res.json(responseData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default AuthController;
