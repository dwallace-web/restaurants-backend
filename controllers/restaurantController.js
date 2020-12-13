const { Router, response } = require('express');
const { Restaurant } = require('../models');
const restaurant = require('../models/restaurant');
const restaurantController = Router();

//get all restaurants
restaurantController.get('/', async (req, res) => {
    try {
        await 
        Restaurant.findAll()
        .then(restaurants => 
            res.status(200).json({
                message: 'Restaurants Found',
                data: restaurants
            })
            
        )
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

restaurantController.post('/', async (req, res) => {
    try {
        console.log(req);
        await 
        Restaurant
        .create(
            {
                userId: req.user.id,
                name: req.body.name,
                address: req.body.address,
                socialmedia: req.body.socialmedia
            }
        )
        res.status(200).json({
            message: 'New Restaurant Created!'
        })
        
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

restaurantController.put('/:id', async (req, res) => {
    try {
        await 

        console.log(req);

        Restaurant.update(
            {
                name: req.body.name,
                address: req.body.address,
                socialmedia: req.body.socialmedia
            }
        )
        res.status(200).json({
            message: 'New Restaurant Created!'
        })
        
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

restaurantController.delete('/', async (req, res) => {
    try {
        await 
        Restaurant
        .create(
            {
                name: req.body.name,
                address: req.body.address,
                socialmedia: req.body.socialmedia
            }
        )
        res.status(200).json({
            message: 'New Restaurant Created!'
        })
        
    } catch (e) {
        res.status(500).json({ error: e })
    }
})



module.exports = restaurantController;