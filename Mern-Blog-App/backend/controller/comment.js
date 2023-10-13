const express=require('express')
const comment = require('../model/comment')

//CREATE
const createComment = async (req,res)=>{
    try{
        const newComment=new comment(req.body)
        const savedComment=await newComment.save()
        res.status(200).json(savedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
     
}

//UPDATE
const updateComment = async (req,res)=>{
    try{
       
        const updatedComment=await comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)

    }
    catch(err){
        res.status(500).json(err)
    }
}


//DELETE
const deleteComment = async (req,res)=>{
    try{
        await comment.findByIdAndDelete(req.params.id)
        
        res.status(200).json("Comment has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
}




//GET POST COMMENTS
const getPostComment = async (req,res)=>{
    try{
        const comments=await comment.find({postId:req.params.postId})
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
}


module.exports={createComment,updateComment,deleteComment,getPostComment}