const express = require("express");
const post = require("../model/post");
const comment = require("../model/comment");

//CREATE
const createPost = async (req, res) => {
  try {
    const newPost = new post(req.body);
    // console.log(req.body)
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updatePost = async (req, res) => {
  try {
    const updatedPost = await post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deletePost = async (req, res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    await comment.deleteMany({ postId: req.params.id });
    res.status(200).json("Post has been deleted!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//GET POST DETAILS
const getPostDetail = async (req, res) => {
  try {
    const getpost = await post.findById(req.params.id);
    res.status(200).json(getpost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

//GET POSTS
const getPost = async (req, res) => {
  const query = req.query;

  try {
    const searchFilter = {
      title: { $regex: query.search, $options: "i" },
    };
    const posts = await post.find(query.search ? searchFilter : null);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER POSTS
const userPost = async (req, res) => {
  try {
    const posts = await post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostDetail,
  getPost,
  userPost,
};
