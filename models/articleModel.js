var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema =  new Schema({
    title : {type: String, required: true, unique: true},
    subtitle : {type: String, required: true},
    content : {type: String, required: true},
    author : {type: String},
    date : {type: String}
})

module.exports = mongoose.model('Article', articleSchema, 'article')