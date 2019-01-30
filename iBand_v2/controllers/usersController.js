var User = require('../models/userModel')

module.exports.list = async () => {
    return await User
            .find()
            .exec()
}

module.exports.insert = user => {
    return User.create(user)
} 

module.exports.getByEmail = email => {
    return User
        .findOne({email: email})
        .exec()
}

module.exports.getById = id => {
    return User
        .findOne({_id: id})
        .exec()
}

module.exports.changeActivation = (id,validation) => {
    return User
        .findByIdAndUpdate({ _id: id }, { $set: { valid: validation }})
        .exec()
}

module.exports.validatePassword = async (email, password) => {
    user = await this.getByEmail(email)
    if(!user) 
        throw new Error("Utilizador não encontrado!")

    if (!user.isValidPassword(password))
        throw new Error ("Invalid password")

    return user
}