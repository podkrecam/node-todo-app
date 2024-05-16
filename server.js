"use strict";

const express = require("express");
const mongoose = require("./src/db/mongoose");

const app = express();
const port = process.env.PORT;

const userRouter = require("./src/routers/user");
const taskRouter = require("./src/routers/task");

app.use(express.json());
app.use(express.static("public"));

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

