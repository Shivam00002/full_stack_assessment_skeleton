import { Request, Response } from "express";
import * as homeService from "../services/ homeService";

export const findHomesByUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const homes = await homeService.findHomesByUser(username);
    res.json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching homes by user", error });
  }
};

export const updateHomeUsers = async (req: Request, res: Response) => {
  try {
    const { streetAddress } = req.params;
    const { usernames } = req.body;
    const updatedHome = await homeService.updateHomeUsers(streetAddress, usernames);
    res.json(updatedHome);
  } catch (error) {
    res.status(500).json({ message: "Error updating home users", error });
  }
};