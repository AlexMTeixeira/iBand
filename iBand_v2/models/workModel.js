var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkSchema = new Schema({
    title:String,
    name:String,
    sheetPath:String,
    voz:{type:String,required:false}
})

module.exports = mongoose.model('Work',WorkSchema, 'works')