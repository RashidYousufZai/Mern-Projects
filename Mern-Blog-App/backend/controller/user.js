const bcrypt=require('bcrypt')
const user = require('../model/user')
const post = require("../model/post")
const comment = require("../model/comment")

const updateUser = async (req, res) => {
    try {
        if (req.body.password) {
            const saltRounds = 10; // You should define the appropriate number of salt rounds
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        }
        console.log("run")
        const updatedUser = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        await post.deleteMany({ userId: req.params.id }); 
        await comment.deleteMany({ userId: req.params.id }); 
        res.status(200).json("user deleted");
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json(err);
    }
}

const getUser = async (req, res) => {
    try {
        const ourUser = await user.findById(req.params.id) 
        const {_id, username, email} = ourUser
        res.status(200).json({_id, username, email});
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

module.exports = {updateUser, deleteUser, getUser}