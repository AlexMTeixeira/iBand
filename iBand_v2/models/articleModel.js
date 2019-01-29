var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema =  new Schema({
    date : {type: Date, required: true},
    title : {type: String, required: true},
    content : {type: String, required: true},
    author : {type: String, required: true}
})

module.exports = mongoose.model('Article', articleSchema, 'article')