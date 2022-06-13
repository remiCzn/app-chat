import { Router } from "express";
import { ServerBusiness } from "../business/serverBusiness";
import { GetRequest, GetResponse, Server } from "app-chat-model";

export default (() => {
  const router = Router();

  const serverBusiness = new ServerBusiness();

  router.get(
    "/all",
    async (
      req: GetRequest<null>,
      res: GetResponse<{ servers: Array<Server> }>
    ) => {
      try {
        const servers = await serverBusiness.getServersList();
        res.status(200).json({ message: "OK", servers: servers });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", servers: [] });
      }
    }
  );

  return router;
})();
