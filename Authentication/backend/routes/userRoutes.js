import express from "express";
import {
  authuser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authuser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
