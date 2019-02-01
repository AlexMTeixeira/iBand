var Article = require('../models/articleModel')

// Lista de noticias
module.exports.list = async () => {
    return await Article
    .find()
    .sort({date: 1})
    .exec()
}

// 5 noticias
module.exports.topList = async () => {
    var date = new Date();
    var stringDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-'+ date.getDate()
    return await Article
        .find({date: {$lt: stringDate}})
        .sort({date: -1})
        .limit(5)
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
    var date = new Date(article.date)
    var newdate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
    article.date = newdate
    return Article.create(article)
}

module.exports.updateArticle = async (_id,title,author,date,content,utype) => {
    article = await this.getById(_id)

    if(!article)
        throw new Error("Artigo não encontrado!")
    
    if(!date)
        date = article.date
    else {
        var olddate = new Date(date)
        var newdate = olddate.getFullYear() + "-" + (olddate.getMonth()+1) + "-" + olddate.getDate()
        date = newdate
    }
    
    if(utype==0 || article.author==author) {
        await Article.findByIdAndUpdate({_id: _id},{$set: {title: title, author: author, date: date, content: content}})
            .exec()
    }
    else 
        throw new Error("User Invalido!")
}

module.exports.delete = async (id,email, utype) => {
    article = await this.getById(id)

    if(utype==0 || article.author==email) {
        await Article
            .remove({_id: id })
            .exec()
    } else throw new Error("User Invalido")
}