const { Router, response } = require('express');
const { Restaurant } = require('../models');
const restaurantController = Router();

restaurantController.post('/', async (req, res) => {
    try {
        await Restaurant.create(
            {
                name: req.body.name,
                address: req.body.address,
                socialmedia: req.body.socialmedia
            }
        )
    } catch (e) {
        res.status(500).json({ error: e })
    }
})


module.exports = restaurantController;