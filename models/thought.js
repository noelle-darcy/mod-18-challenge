const { Schema, model } = require("mongoose");
const moment = require('moment');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: new Schema.Types.ObjectId()
    }, 
    reactionBody: {
        type: string, 
        required: true, 
        maxlength: 280
    }, 
    username: {
        type: string, 
        required: true
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
        //Use a getter method to format the timestamp on query
    }
}, {
        toJSON: {
            virtuals: true,
        },
        id: false,
})
//i'm not sure if it needs the "toJSON" thing

const thoughtSchema = new Schema ({
    thoughText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 280
    }, 
    username: {
        type: String, 
        required: true
    }, 
    reactions: {//nested documents created with the reactionSchema?? 
}
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//this is the virtual that finds the amount of reactions on a thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reations.length;
});
 
//Initializes our thought model 
const Thought = model('thought', thoughtSchema); 

module.exports = Thought; 



//create reactionCount virtual that retrieves the length of the thought's reactions array field on query. - DONE