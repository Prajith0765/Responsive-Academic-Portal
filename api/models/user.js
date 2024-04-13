const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    Rollno : {type: String, unique: true},
    Name :  {type:String},
    

});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;