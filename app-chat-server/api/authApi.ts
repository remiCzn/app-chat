import { Router } from "express";
import { AuthBusiness } from "../business/authBusiness";
import { PostRequest, RegisterApi } from "app-chat-model";
import { BusinessError } from "../business/utils/businessError";

export default (() => {
  const router = Router();
  const authBusiness = new AuthBusiness();

  router.post("/register", async (req: PostRequest<RegisterApi>, res) => {
    try {
      await authBusiness.register(req.body);
      res.status(200).json({ message: "OK" });
    } catch (e) {
      if (e instanceof BusinessError) {
        res.status(400).json({ message: e.message });
      } else {
        res.status(500).json({
          message: "Unable to create the user, internal server error",
        });
      }
    }
  });

  return router;
})();
