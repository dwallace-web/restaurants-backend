const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController = Router();

userController.post('/register', (req, res) => {

    //req deconstruction 
    await User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12),
        phoneNumber: req.body.phonenumber,
        lastName: req.body.lastname,
        firstName: req.body.firstname,
        
    })
    .then(user => {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, ({expiresIn: '12h'}))

        res.status(200).json({
            user: user,
            message: 'User registered!',
            sessionToken: token
        });
    })
    .catch(err => res.status(500).json({error: err}));

});

userController.post('/login', async (req, res) => {
    console.log('login func start')

    User.findOne({
        where: {
            email: req.body.username
        }
    })
        .then(user => {
            if(user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if(matches) {
                        //set token 
                        //login success
                    }
                    else {
                        //password doesn't match
                    }
                })
            } else {
                //no email found
            }
        })
    
    console.log('login func end')

})

module.exports = userController;