import dbClient from "../prisma/dbClient";
import { PrismaClient, user } from "@prisma/client";

export class UserRepository {
  private db: PrismaClient;

  constructor() {
    this.db = dbClient;
  }

  public createUser(username: string, password: string): Promise<void> {
    return this.db.user
      .create({
        data: {
          username: username,
          password: password,
        },
      })
      .then((user) => {
        console.log("User Created: " + user.username);
      });
  }

  public findUserByUsername(username: string): Promise<Array<user>> {
    return this.db.user.findMany({
      where: {
        username: username,
      },
    });
  }
}
