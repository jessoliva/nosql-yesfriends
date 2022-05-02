const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thoughts /api/thoughts
    getAllThought: (req, res) => {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // GET a single thought /api/thoughts/:id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }

            res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // POST /api/thoughts
    // create a new thought
    createThought({ body }, res) {
        Thought.create(body)
        .then(({ _id }) => {   
            return User.findOneAndUpdate(
               { _id: body.userId },
               { $push: { thoughts: _id } }, 
               { new: true }
            )
        })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // PUT /api/thoughts/:id
    // update a thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }) 
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

   // DELETE /api/thoughts/:id
   // delete thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // POST /api/thoughts/:thoughtId/reactions
    // create a new reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            { $push: { reactions: body } }, 
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // DELETE /api/thoughts/:thoughtId/reactions
    // delete reaction
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactionId: params.reactionId } },
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
}

module.exports = thoughtController;

// connects to thought-routes.js