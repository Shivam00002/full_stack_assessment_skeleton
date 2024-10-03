import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/find-all", userController.findAllUsers);
router.get("/find-by-home/:streetAddress", userController.findUsersByHome);

export default router;