var mongoose = require('mongoose')
var Schema = mongoose.Schema
var InstrSchema = new Schema({
    name:{type:String},
    sheetPath:{type:String},
    voz:{type:String,required:false}
})
var WorkSchema = new Schema({
    title:{type:String,required:true,unique:true},
    instruments:{type:[InstrSchema]}
})

module.exports = mongoose.model('Work',WorkSchema, 'works')