const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: { // don't really need this bc the _id is unique
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280      
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    { 
        toJSON: {
            getters: true
        },
        id: false // removes the additional id display
    }
);

const ThoughtSchema = new Schema(
   {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
   },
   {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
   }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
