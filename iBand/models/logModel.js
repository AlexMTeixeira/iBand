var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LogSchema = new Schema({
    user_id:{type:String,required:true},
    action:{type:String,required:true},
    date:{type:String,required:false}
})

LogSchema.pre('save', async function(next) {
    var date = new Date()
    this.date = date
    next()
})

module.exports = mongoose.model('Log', LogSchema, 'logs')