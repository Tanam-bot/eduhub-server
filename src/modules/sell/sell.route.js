import { Router } from "express";
import {
  createSellPost,
  getAllBooks,
  getAllDevices,
} from "./sell.controller.js";

const route = Router();

route.post("/create-sell-post", createSellPost);

route.get("/get-all-books", getAllBooks);

route.get("/get-all-devices", getAllDevices);

export const SellRouter = route;
