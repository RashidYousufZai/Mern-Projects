const express = require('express');
const Connection = require("./database/db.js")
const app = express();
const dotenv = require("dotenv")
const Routes = require("./routes/route.js")
const cors = require("cors")

dotenv.config();
app.use(cors());



const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use('/', Routes);

Connection(userName, password);


app.listen(4000, () => {
    console.log(`localhost:{$4000}`)
})