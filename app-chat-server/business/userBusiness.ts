import { UserRepository } from "../repository/userRepository";
import { JwtHandler } from "./utils/jwtHandler";
import { user } from "@prisma/client";
import { BusinessError } from "./utils/businessError";

export class UserBusiness {
  private userRepository: UserRepository;
  private jwtHandler: JwtHandler;

  constructor() {
    this.userRepository = new UserRepository();
    this.jwtHandler = new JwtHandler();

    this.getPersonalUserProfile = this.getPersonalUserProfile.bind(this);
  }

  async getPersonalUserProfile(token: string) {
    const userId: number = parseInt(
      this.jwtHandler.verify<{ userId: string }>(token).userId
    );

    const user: user | null = await this.userRepository.findUserById(userId);

    if (user == null) {
      throw new BusinessError("User not found");
    }
    return {
      username: user.username,
    };
  }
}
