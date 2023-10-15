const express = require("express");
const router = express.Router();
const {
  createComment,
  updateComment,
  deleteComment,
  getPostComment,
} = require("../controller/comment");
const varifyToken = require("../middleware/varifyToken.js");

router.post("/create", createComment);
router.put("/:id", varifyToken, updateComment);
router.delete("/:id", varifyToken, deleteComment);
router.get("/post/:postId", getPostComment);

module.exports = router;
