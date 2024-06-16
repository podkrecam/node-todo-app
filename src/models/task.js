"use strict";

const validator = require("validator");
const mongoose = require("mongoose");
const moment = require("moment");

const taskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    category: {
      type: String,
      enum: ["Work", "Personal", "School", "Other"],
      default: "Other",
      trim: true,
    },
    deadline: {
      type: Date,
      default: Date.now,
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Deadline must be a future date",
      },
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();

  if (taskObject.deadline) {
    taskObject.deadline = moment(taskObject.deadline).format("YYYY/MM/DD");
  }

  return taskObject;
};

const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;
