import { PrismaClient } from "@prisma/client";
import dbClient from "../prisma/dbClient";
import { Server } from "app-chat-model";

export class ServerRepository {
  private db: PrismaClient;

  constructor() {
    this.db = dbClient;
  }

  async getServerList(): Promise<Server[]> {
    return this.db.server.findMany();
  }
}
