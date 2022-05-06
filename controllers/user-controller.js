const { User, Comment } = require('../models');

const userController = {
    // GET all users /api/users
    getAllUser: (req, res) => {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // GET a single user /api/users/:id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(dbUserData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });

    },

    // POST /api/users
    // create a new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // PUT /api/users/:id
    // update a user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }) 
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json({
                message: "User updated",
                data: dbUserData
            });
        })
        .catch(err => res.status(400).json(err));
    },

    // NEED BONUS, DELETE ALL THOUGHTS WHEN USER IS DELETED
   // DELETE /api/users/:id
   // delete user by id
    deleteUser(req, res) {
        // OLD User.findOneAndDelete({ _id: params.id })
        User.findByIdAndDelete(req.params.id)
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json({
                message: "User deleted",
                data: dbUserData
            });
        })
        .catch(err => res.status(400).json(err));
    },

    // POST /api/users/:userId/friends/:friendId
    // create a new friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: { friends: params.friendId } }, 
            { new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json({
                message: "Friend added",
                data: dbUserData
            });
        })
        .catch(err => res.status(400).json(err));
    },

    // DELETE /api/users/:userId/friends/:friendId
    // remove a friend
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.json(err));
    },
}

module.exports = userController;

// connects to user-routes.js