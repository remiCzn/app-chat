import { UserRepository } from "../repository/userRepository";
import { RegisterApi } from "app-chat-model";
import { BusinessError } from "./utils/businessError";
import { user } from "@prisma/client";
import bcrypt from "bcrypt";

const REGEXP_PASSWORD: RegExp = new RegExp("^(?=.*\\d).{6,}$");

export class AuthBusiness {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.register = this.register.bind(this);
  }

  public register(parameters: RegisterApi) {
    const username: string = parameters.username;
    const password: string = parameters.password;
    if (username.length < 5) {
      throw new BusinessError(
        "Username is not long enough (must be 5+ characters)"
      );
    } else if (!REGEXP_PASSWORD.test(password)) {
      throw new BusinessError(
        "Password must contains at least 6 characters and one numeric digit"
      );
    }
    // Check if user already exists
    return this.userRepository
      .findUserByUsername(username)
      .then((users: user[]) => {
        if (users.length > 0) {
          throw new BusinessError("This username is already used");
        }
        // Encrypt pw
        bcrypt.hash(password, 12, (err: Error | undefined, encrypted) => {
          return this.userRepository.createUser(username, encrypted);
        });
      });
  }
}
