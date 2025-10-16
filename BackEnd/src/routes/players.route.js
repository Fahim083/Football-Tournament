import Router from "express";
import { getAllPlayers } from "../controllers/players.controller.js";

const playerRouter = Router();

playerRouter.get("/", getAllPlayers);




export  {playerRouter};