import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: UserRoutes,
  },

  // {
  //   path: "/auth",
  //   route: AuthRouter,
  // },
];
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
