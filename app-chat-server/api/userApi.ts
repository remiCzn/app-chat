import { UserBusiness } from "../business/userBusiness";
import { Router } from "express";
import { PostRequest, PostResponse } from "app-chat-model";
import { BusinessError } from "../business/utils/businessError";

export default (() => {
  const router = Router();
  const userBusiness = new UserBusiness();

  router.post(
    "/",
    async (
      req: PostRequest<{ token: string }>,
      res: PostResponse<{ username?: string }>
    ) => {
      try {
        const profile: { username: string } =
          await userBusiness.getPersonalUserProfile(req.body.token);
        res.status(200).json(Object.assign(profile, { message: "OK" }));
      } catch (e) {
        if (e instanceof BusinessError) {
          res.status(400).json({ message: e.message });
        } else {
          console.error(e);
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  );

  return router;
})();
