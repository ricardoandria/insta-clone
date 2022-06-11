import express from "express";
import {
  deleteUser,
  followUser,
  unfollows,
  updateUser,
} from "../controllers/user.js";

const route = express.Router();

route.put("/:id", updateUser);
route.delete("/:id", deleteUser);
route.put("/:id/follow", followUser);
route.put("/:id/unfollow", unfollows);

export default route;
