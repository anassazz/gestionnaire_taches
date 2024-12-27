const express = require('./../node_modules/express');
const Task = require('./../models/Task');
const body_parser = require("./../node_modules/body-parser");

const app = express();


app.use(body_parser.json());

// Create a task
app.post('/api/tasks', async (req, res) => {
  try {
    console.log(req.body);
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
    });
    await task.save(); // save data in database
    res.status(200).send({message: "data send succefully"});
    console.log("data send succefully");
  } catch (err) {
    res.status(500).send({message: "data does not send succefully"});
    console.log("data does not send succefully");
  }

});

// Get all tasks
// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send({ message: 'An error occurred while fetching tasks.' });
  }
});

// Update a task
// Update a task
app.put('/api/tasks/:id', async (req, res) => {

  const task = req.body;
  console.log(task);

  try {
    const UpdatedData = await Task.findByIdAndUpdate(req.params.id, task);
    res.status(200).send({message: "Data Updated Succefully"});
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Data Does not Updated Sucecfully"});
  }

});



// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "Data Deleted Succefully"});
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Data Does not Deleted Sucecfully"});
  }
    
});


// make api active
app.listen(3000, function() {
  console.log("Api Listening to Port 3000");
});


module.exports = app;

