import express from "express";
import { appData } from "../demoData";
export const menuRouter = express.Router();

const { menus } = appData; //destructure the menus from appDatas
menuRouter.put("/", (req, res) => {
  res.send("MenuRouter");
});

menuRouter.get("/", (req, res) => {
  res.send(menus);
});
