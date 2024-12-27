const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks'); // Import routes
const tasks = require("./routes/tasks");

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gestionnaire_taches')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));











