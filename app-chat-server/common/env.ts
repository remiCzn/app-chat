import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  JWT_TOKEN: process.env.JWT_TOKEN!,
  JWT_EXPIRES: parseInt(process.env.JWT_EXPIRES!),
};
