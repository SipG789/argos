const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


// set up GET all POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


// set up GET one, PUT, and DELETE at /api/thoughts/:id
router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)


// set up POST and DELETE reactions
router 
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)





module.exports = router;