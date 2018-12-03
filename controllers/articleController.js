var Article = require('../models/articleModel')

// Lista de noticias
module.exports.list = () => {
    return Article
    .find()
    .sort({date: -1})
    .exec()
}

// Lista de noticias com Data maior que uma dada
module.exports.listarData = data => {
    return Article
    .find({date: {$gte: date}})
    .sort({date: -1})
    .exec()
}

// Lista de noticias por Data
module.exports.listarDataExata = data => {
    return Article
    .find({date: date})
    .sort({date: -1})
    .exec()
}

module.exports.inserir = article => {
    return Article.create(article)
}