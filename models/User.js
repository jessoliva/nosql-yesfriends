// import Schema constructor and model function
const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// create the schema for the model to create a new user
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address'], // email check with regex
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
        // remove the additional id field that mongoose adds
    }
);

// Retrieves the length of the user's friends array
UserSchema.virtual('friendCount').get(function() {
   return this.friends.length;
});

// SOURCES
// https://stackoverflow.com/questions/17826082/how-to-delete-multiple-ids-in-mongodb
// https://stackoverflow.com/questions/59147493/mongoose-deleteone-middleware-for-cascading-delete-not-working
UserSchema.post("findOneAndDelete", async function(doc) {
    if (doc) {
        const deleteResult = await Thought.deleteMany({ _id: { $in: doc.thoughts } });
        console.log("Thought delete result: ", deleteResult);
    }
});

// Create the model for the User
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
