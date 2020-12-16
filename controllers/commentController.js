const { Router, response } = require('express');
const { Comment } = require('../models');
const commentController = Router();

//get all comments
commentController.get('/', async (req, res) => {
    try {
        await 
        comment.findAll()
        .then(comments => 
            res.status(200).json({
                message: 'comments Found',
                data: comments
            })
            
        )
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

commentController.post('/', async (req, res) => {
    try {
        // console.log(req);
        await 
        Comment
        .create(
            {
                title: req.body.title,
                body: req.body.body,
                userId: req.user.id,
                restaurantId: req.body.restaurantid
            }
        )
        res.status(200).json({
            message: 'New comment Created!'
        })
        
    } catch (e) {
        res.status(500).json({ error: e})
    }
})

// commentController.put('/:id', async (req, res) => {
//     try {
        
//         const query = { where: { id: req.params.id, userId: req.user.id } };
//         const updatedDetails = {
//             name: req.body.name,
//             address: req.body.address,
//             socialmedia: req.body.socialmedia
//         }
//         comment
//         .update(updatedDetails, query)
//         .then(updates =>
//             res.status(200).json({
//                 message: 'Edited comment',
//                 data: updates
//             })
            
//         )
//     } catch (e) {
//         res.status(500).json({ error: e })
//     }
// })

// commentController.delete('/:id', async (req, res) => {
//     try {
//         const query = { where: { id: req.params.id, userId: req.user.id } };

//         comment
//         .destroy(query)
//         .then(() => res.status(200).json({
//             message: 'comment was deleted',
//         })
        
//         )
//     } catch (e) {
//         res.status(500).json({ error: e })
//     }
// })



module.exports = commentController;