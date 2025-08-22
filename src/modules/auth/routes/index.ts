import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export default (controller: AuthController) => {
  const router = Router();

  router.post("/auth/login", (...args) => controller.login(...args));
  router.post("/auth/register", (...args) => controller.register(...args));

  return router;
};
