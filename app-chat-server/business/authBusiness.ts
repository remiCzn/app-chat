import { UserRepository } from "../repository/userRepository";

export class AuthBusiness {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.register = this.register.bind(this);
  }

  public register(username: string, password: string) {
    return this.userRepository.createUser(username, password);
  }
}
