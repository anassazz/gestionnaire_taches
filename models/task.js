const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});


const Task = new mongoose.model("Task_data", taskSchema);


module.exports = Task;

