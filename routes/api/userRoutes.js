const router = require('express').Router(); 

const {
    allUsers,
    findUser,
    createUser,
    updateUser, 
    removeUser, 
    addFriend, 
    removeFriend
} = require('../../controllers/userControllers');

router
    .route('/')
    .get(allUser)
    .post(createUser);

router 
    .route('/:id')
    .get(findUser)
    .put(updateUser)
    .delete(removeUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(remoteFriend);

module.exports = router; 