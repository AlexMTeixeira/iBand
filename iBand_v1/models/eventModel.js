var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TimetableSchema = new Schema({
    h_init: {type: String},
    h_end: {type: String}
})

var EventSchema = new Schema({
    date: {type: String, required: true},
    timetable: {type: TimetableSchema},
    type: {type: String, required: true},
    designation: {type: String},
    place: {type: String},
    info: {type: String}
})

module.exports = mongoose.model('Event', EventSchema, 'events')