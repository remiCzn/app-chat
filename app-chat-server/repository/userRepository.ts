import dbClient from "../prisma/dbClient";
import { PrismaClient } from "@prisma/client";

export class UserRepository {
  private db: PrismaClient;

  constructor() {
    this.db = dbClient;
  }

  public createUser(username: string, password: string) {
    return this.db.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  }
}
