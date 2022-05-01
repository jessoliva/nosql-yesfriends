// import Schema constructor and model function
const { Schema, model } = require('mongoose');

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

// Create the model for the User
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
