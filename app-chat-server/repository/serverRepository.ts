import { PrismaClient, server } from "@prisma/client";
import dbClient from "../prisma/dbClient";

export class ServerRepository {
  private db: PrismaClient;

  constructor() {
    this.db = dbClient;
  }

  async getServerList(): Promise<server[]> {
    return this.db.server.findMany();
  }
}
