const { Schema, model } = require("mongoose");
const moment = require('moment');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    }, 
    email: {
        type: string,
        required: true, 
        unique: true,
        //i don't know if the match is correct for email validation 
        match: [/.+\@.+\..+/]
    },
    thoughs: {
       type: mongoose.Types.ObjectId(), 
       ref: 'Thought'
    }, 
    friends: {
        type: mongoose.Types.ObjectId(), 
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});

//create friendCount virtual??
    // retrieves length of the user's "friends" array field on query
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);


module.exports = User; 