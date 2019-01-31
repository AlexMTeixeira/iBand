var mongoose = require('mongoose')
var Schema = mongoose.Schema
var InstrSchema = new Schema({
    name:{type:String},
    sheetPath:{type:String},
    voz:{type:String,required:false},
    exists:Boolean
})
var WorkSchema = new Schema({
    title:{type:String,required:true,unique:true},
    type:{type:String,required:true},
    composer:{type:String,required:false},
    arrangement:{type:String,required:false},
    instruments:{type:[InstrSchema]}
})

module.exports = mongoose.model('Work',WorkSchema, 'works')