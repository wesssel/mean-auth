var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    image: String    
});

mongoose.model('User', UserSchema);