import { Router } from "express";
import { AuthBusiness } from "../business/authBusiness";

export default (() => {
  const router = Router();
  const authBusiness = new AuthBusiness();
  return router;
})();
