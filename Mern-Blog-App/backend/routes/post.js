const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  getPostDetail,
  getPost,
  userPost,
} = require("../controller/post");
const verifyToken = require("../middleware/varifyToken.js");

router.post("/create", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.get("/:id", getPostDetail);
router.get("/", getPost);
router.get("/user/:userId", userPost);

module.exports = router;
