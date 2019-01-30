var Article = require('../models/articleModel')

// Lista de noticias
module.exports.list = async () => {
    console.log('in article controller')
    return await Article
    .find()
    .sort({date: -1})
    .exec()
}

// Lista de noticias com Data maior que uma dada
module.exports.listByDate = date => {
    return Article
    .find({date: {$gte: date}})
    .sort({date: -1})
    .exec()
}

// Lista de noticias com Data maior que uma dada
module.exports.listUntilDate = date => {
    var date_object = new Date();
    var actual_date = date_object.getDate() + '-' + date_object.getMonth() + '-' + date_object.getFullYear();

    return Article
    .find({date: {$gte: actual_date, $lte: date}})
    .sort({date: -1})
    .exec()
}


// Lista de noticias por Data
module.exports.listByExactDate = date => {
    return Article
    .find({date: date})
    .sort({date: -1})
    .exec()
}


// Lista de noticias por Data
module.exports.listByAuthor = author => {
    return Article
    .find({author: author})
    .sort({date: -1})
    .exec()
}

module.exports.getById = id => {
    return Article
    .findOne({ _id: id })
    .exec()
}

module.exports.insert = article => {
    return Article.create(article)
}

module.exports.updateArticle = async (_id,title,author,date,content) => {
    article = await this.getById(_id)

    if(!article)
        throw new Error("Artigo não encontrado!")
    
    if(!date)
        date = article.date
    
    await Article.update({_id: _id},{$set: {title: title, author: author, date: date, content: content}})
            .exec()
}

module.exports.delete = id => {
    return Article
    .deleteOne({ id })
    .exec()
}