const { Router } = require('express');
const { User } = require('../models');
const { UniqueConstraintError } = require('sequelize/lib/errors');


const userController = Router();

userController.post('/register', async (req, res) => {
    
    User.create({
        email: req.body.email,
        password: req.body.password
    });
    res.status(201).json({
        message: 'User registered!'
    })
    .catch(err => res.status(500).json({error: err}));
});

module.exports = userController;