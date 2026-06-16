const express = require('express');
router = express.Router();
const User = require('../model/userSchema');
const product = require('../model/productSchema');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controller/userLogic');

router.get('/', (req, res) => {
        res.send('Users route');
});

// Create user
router.post('/create',createUser);

// Get all users
router.get('/users', getUsers);

// Get user by id
router.get('/users/:id', getUser);

// Update user by id
router.put('/users/:id', updateUser);

// Delete user by id
router.delete('/users/:id', deleteUser);

module.exports = router;