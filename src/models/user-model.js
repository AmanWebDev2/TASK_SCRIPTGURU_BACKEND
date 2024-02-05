const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true,"missing username"]
    },
    email: {
        type: String,
        unique: true,
        required: [true,"missing email"]
    },
    password: {
        type: String,
        minLength: [5,"minimum length of password should be 6 length"],
        required: [true,"missing password"]
    },
},{
    timestamps: true
})


UserSchema.pre("save",function(next){
    console.log(this)
    const hashedPassword = bcrypt.hashSync(this.password,10);
    this.password = hashedPassword;
    next();
})

 
const User = mongoose.model('User',UserSchema);


module.exports = User;