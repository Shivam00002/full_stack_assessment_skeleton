import express from "express";
import * as homeController from "../controllers/homeController";

const router = express.Router();

router.get("/find-by-user/:username", homeController.findHomesByUser);
router.put("/update-users/:streetAddress", homeController.updateHomeUsers);

export default router;