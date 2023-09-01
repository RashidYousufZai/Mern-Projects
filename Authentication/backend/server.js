import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";
import { notFound, errorHandlor } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
app.use(notFound);
app.use(errorHandlor);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => console.log(`server is running at ${port} `));
