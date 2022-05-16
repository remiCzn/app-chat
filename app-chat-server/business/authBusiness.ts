import { UserRepository } from "../repository/userRepository";
import { LoginApi, RegisterApi } from "app-chat-model";
import { BusinessError } from "./utils/businessError";
import { user } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CONFIG } from "../common/env";

const REGEXP_PASSWORD: RegExp = new RegExp("^(?=.*\\d).{6,}$");

export class AuthBusiness {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  public register(parameters: RegisterApi): Promise<void> {
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

  public async login(parameters: LoginApi) {
    const username = parameters.username;
    const password = parameters.password;

    const users = await this.userRepository.findUserByUsername(username);
    if (users.length > 0) {
      const user = users[0];
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (passwordIsValid) {
        return jwt.sign(
          {
            userId: user.id.toString(),
          },
          CONFIG.JWT_TOKEN,
          {
            expiresIn: CONFIG.JWT_EXPIRES,
          }
        );
      } else {
        throw new BusinessError("Wrong password");
      }
    } else {
      throw new BusinessError("This user doesn't exists");
    }
  }
}
