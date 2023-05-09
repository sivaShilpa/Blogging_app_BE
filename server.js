require("dotenv").config();
require('./config/db.connection.js');
const { PORT } = process.env;
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")


const app = express();
const blogRouter = require('./routes/blogging_router.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

app.use('/blog', blogRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
