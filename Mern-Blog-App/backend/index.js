const express = require("express");
const database = require("./database/db.js");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/user.js")
const postRoute = require("./routes/post.js")
const commentRoute = require("./routes/comment.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path=require("path")


// Middlewares
dotenv.config()
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser())

// database connection
database();


// routes 
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments", commentRoute) 



const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.png")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded successfully!")
})


app.listen(process.env.PORT, () => {
    console.log("App is running");
});
