const { Thought, User } = require('../modeks');

module.exports = {
    allUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    }
}