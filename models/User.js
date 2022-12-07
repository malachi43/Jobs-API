const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name'],
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: [true, 'please provide  password'],
        minlength: 6,
    },
    email: {
        type: String,
        required: [true, 'please provide an email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email']
    }
})

//mongoose middleware
UserSchema.pre('save', async function(){
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

//instance method
UserSchema.methods.createJWT = function (){
    return jwt.sign({userId: this._id, name: this.name},process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}


UserSchema.methods.comparePassword = async function(passwordToCompare){
   return bcryptjs.compare(passwordToCompare, this.password)
}

module.exports = mongoose.model('User', UserSchema)