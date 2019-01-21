var User = require('../models/user')

module.exports.list = () => {
    return User
        .find()
        .exec()
}

module.exports.insert = user => {
    return User.create(user)
} 

module.exports.getUbyEmail = email => {
    return User
        .findOne({email: email})
        .exec()
}

module.exports.getUbyId = id => {
    return User
        .findOne({_id: id})
        .exec()
}