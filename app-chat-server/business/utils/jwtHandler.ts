import jwt from "jsonwebtoken";
import { CONFIG } from "../../common/env";

export class JwtHandler {
  public sign(object: Object): string {
    return jwt.sign(object, CONFIG.JWT_TOKEN, {
      expiresIn: CONFIG.JWT_EXPIRES,
    });
  }

  public verify<T>(token: string): T {
    return <T>jwt.verify(token, CONFIG.JWT_TOKEN);
  }
}
