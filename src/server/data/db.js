var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/openmusic');

var User = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now},
    status: String
});

module.exports.User = User;
