const router = require('express').Router(); 

const {
    allThoughts, 
    findThoughts, 
    newThought, 
    updateThought, 
    removeThought, 
    createReaction, 
    removeReaction
} = require ('../../controllers/thoughtController');

router
    .route('/')
    .get(allThoughts)
    .post(newThought); 

router  
    .route('/:id')
    .get(findThoughts)
    .put(updateThought)
    .delete(removeThought);

router 
    .route('/:thoughtID/reactions')
    .post(createReaction);

router 
    .route('/:thoughtID/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;