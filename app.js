const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

connectMongoDB();

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", passport_jwt.authenticate("jwt", { session: false }), indexRouter);
app.use("/auth", authRouter);

module.exports = app;
