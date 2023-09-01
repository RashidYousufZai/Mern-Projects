import AsyncHandler from "express-async-handler";
import User from "../config/modules/userSchema.js";

// disc     auth user/token
//route     POST api/user/auth
//access    Public
const authuser = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "auth user" });
});

// disc     register new user
//route     POST api/user/auth
//access    Public
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error("user Already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

// disc     logout user
//route     POST api/user/logout
//access    Public
const logoutUser = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

// disc     get user Profile
//route     GET api/user/profile
//access    private
const getUserProfile = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user Profile" });
});

// disc     Update user Profile
//route     GET api/user/update
//access    private
const updateUserProfile = AsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user Profile" });
});

export {
  authuser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
