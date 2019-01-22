var User = require('../models/userModel')

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

module.exports.validatePassword = async (email, password) => {
    user = await this.getUbyEmail(email)
    if(!user) 
        throw new Error("Utilizador não encontrado!")

    if (!user.isValidPassword(password))
        throw new Error ("Invalid password")

    return user
}