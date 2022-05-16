import { Router } from "express";
import { AuthBusiness } from "../business/authBusiness";
import {
  LoginApi,
  LoginApiResponse,
  PostRequest,
  PostResponse,
  RegisterApi,
} from "app-chat-model";
import { BusinessError } from "../business/utils/businessError";
import { CONFIG } from "../common/env";

export default (() => {
  const router = Router();
  const authBusiness = new AuthBusiness();

  router.post(
    "/register",
    async (req: PostRequest<RegisterApi>, res: PostResponse<{}>) => {
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
    }
  );

  router.post(
    "/login",
    async (req: PostRequest<LoginApi>, res: PostResponse<LoginApiResponse>) => {
      try {
        const token = await authBusiness.login(req.body);
        res.status(200).json({
          message: "OK",
          token: token,
          expiryTime: Date.now() + CONFIG.JWT_EXPIRES * 1000,
        });
      } catch (e) {
        if (e instanceof BusinessError) {
          res.status(400).json({ message: e.message });
        } else {
          console.error(e);
          res.status(500).json({
            message: "Unable to login, internal server error",
          });
        }
      }
    }
  );

  return router;
})();
