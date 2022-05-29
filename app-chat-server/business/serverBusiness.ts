import { server } from "@prisma/client";
import { ServerRepository } from "../repository/serverRepository";

export class ServerBusiness {
  private serverRepository: ServerRepository;

  constructor() {
    this.serverRepository = new ServerRepository();

    this.getServersList = this.getServersList.bind(this);
  }

  async getServersList(): Promise<Array<server>> {
    return this.serverRepository.getServerList();
  }
}
