var mongoose = require('mongoose')
var Schema = mongoose.Schema

var localSchema = new Schema({
    space: {type: String},
    lat: {type: Number},
    long: {type: Number}
})

var timetableSchema = new Schema({
    date: {type: Date},
    duration: {type: Number},
    desc: {type: String}
})

var EventSchema = new Schema({
    local: {type: localSchema, required: true},
    theme: {type: String, required: true},
    description: {type: String},
    timetable: {type: [timetableSchema], required: true},
    interested: {type: [String]}
})

module.exports = mongoose.model('Event', EventSchema, 'events')