import { ServerRepository } from "../repository/serverRepository";
import { Server } from "app-chat-model";

export class ServerBusiness {
  private serverRepository: ServerRepository;

  constructor() {
    this.serverRepository = new ServerRepository();

    this.getServersList = this.getServersList.bind(this);
  }

  async getServersList(): Promise<Array<Server>> {
    return this.serverRepository.getServerList();
  }
}
