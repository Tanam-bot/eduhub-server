import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";
import { AuthRouter } from "../modules/auth/auth.router.js";
import { SellRouter } from "../modules/sell/sell.route.js";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: UserRoutes,
  },

  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/sell",
    route: SellRouter,
  },
];
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
