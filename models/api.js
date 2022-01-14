const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('api', likesSchema);