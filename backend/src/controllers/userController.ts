import { Request, Response } from "express";
import * as userService from "../services/userService";

export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const findUsersByHome = async (req: Request, res: Response) => {
  try {
    const { streetAddress } = req.params;
    const users = await userService.findUsersByHome(streetAddress);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users by home", error });
  }
};