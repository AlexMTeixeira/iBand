var User = require('../models/userModel')

module.exports.list = async () => {
    return await User
            .find()
            .sort({name: 1})
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

module.exports.delete = async id => {
    await User.remove({_id: id})
        .exec()
}

module.exports.updateUser = async (email,pass,name,utype,valid) => {
    user = await this.getByEmail(email)

    if(!user)
        throw new Error("Utilizador não encontrado!")
    
    if(!pass)
        pass = user.password
    
    if(!name)
        name = user.name
    
    await User.update({email: email},{$set: {password: pass, name: name, utype: utype, valid: valid}})
            .exec()
}

module.exports.validatePassword = async (email, password) => {
    user = await this.getByEmail(email)
    if(!user) 
        throw new Error("Utilizador não encontrado!")

    var compare = await user.isValidPassword(password)

    if(!compare)
        throw new Error ("Invalid password")

    return user
}