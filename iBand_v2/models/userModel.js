var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    utype: {type: Number, required: true},
    valid: {type: Boolean, required: true}
})

UserSchema.pre('save', async function(next) {
    var hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = async function(password) {
    var user = this
    var pass = await bcrypt.hash(password, 10)
    console.log("first: "+pass)
    console.log("2: "+user.password)
    var compare = await bcrypt.compare(password, user.password)
    console.log("WTF "+compare)
    return compare
}

module.exports = mongoose.model('User',UserSchema, 'users')