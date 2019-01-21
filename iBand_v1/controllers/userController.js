var User = require('../models/userModel')

module.exports.list = () => {
    return User
        .find()
        .sort({ date : -1 })
        .exec()
}

module.exports.GetByID = () => {
    return User
        .findOne({ _id : id })
        .exec()
}

module.exports.insert = event => {
    return User.create(event)
}

module.exports.delete = id => {
    return User
        .deleteOne({ id })
        .exec()
}