const express = require("express");
const router = express.Router();
const user = require("../model/user.js")
const bcrypt = require('bcrypt');
const { updateUser, deleteUser,getUser } = require("../controller/user.js");
const verifyToken  = require("../middleware/varifyToken.js")

router.use("/:id", verifyToken);

router.route('/:id')
  .put(updateUser )
  .get(getUser)
  .delete(deleteUser );

module.exports = router;