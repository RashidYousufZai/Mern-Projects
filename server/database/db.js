// import mongoose from "mongoose"
const mongoose = require("mongoose");


const Connection = async (userName, password) => {
    const URL = `mongodb://${userName}:${password}@ac-zoudmrl-shard-00-00.zwipzgc.mongodb.net:27017,ac-zoudmrl-shard-00-01.zwipzgc.mongodb.net:27017,ac-zoudmrl-shard-00-02.zwipzgc.mongodb.net:27017/?ssl=true&replicaSet=atlas-121vhu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    console.log("database connected")
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true })
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connection;