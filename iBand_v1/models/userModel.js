var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema =  new Schema({
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    user_permissions : {type: String, required: true},
    email : {type: String},
    registered : {type: String}
})

UserSchema.pre('save', async function(next) {
    var hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = async function(password) {
    var user = this
    var compare = await bcrypt.compare(password, user.password)
    return compare
}

module.exports = mongoose.model('User', UserSchema, 'users')