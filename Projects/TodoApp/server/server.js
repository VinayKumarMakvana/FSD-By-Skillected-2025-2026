const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory array fallback if MongoDB is not provided or fails
let todos = [];

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todoapp';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB, using in-memory storage fallback.', err.message);
  });

const Todo = require('./models/Todo');

app.get('/api/todos', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const dbTodos = await Todo.find().sort({ createdAt: -1 });
      res.json(dbTodos);
    } else {
      res.json(todos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const newTodo = new Todo({
        text: req.body.text,
        priority: req.body.priority || 'medium',
        completed: false
      });
      const savedTodo = await newTodo.save();
      res.status(201).json(savedTodo);
    } else {
      const newTodo = { 
        _id: Date.now().toString(), 
        text: req.body.text, 
        priority: req.body.priority || 'medium',
        completed: false, 
        createdAt: new Date() 
      };
      todos.unshift(newTodo);
      res.status(201).json(newTodo);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { completed: req.body.completed },
        { new: true }
      );
      res.json(updatedTodo);
    } else {
      const index = todos.findIndex(t => t._id === req.params.id);
      if (index !== -1) {
        todos[index].completed = req.body.completed;
        res.json(todos[index]);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      await Todo.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted' });
    } else {
      todos = todos.filter(t => t._id !== req.params.id);
      res.json({ message: 'Deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
