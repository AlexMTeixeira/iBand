var Event = require('../models/eventModel')

// Lista de eventos
module.exports.list = () => {
    return Event
        .find()
        .sort({day: -1})
        .exec()
}

// Lista de eventos por Tipo
module.exports.listByType = tipo => {
    return Event
    .find({tipo: tipo})
    .sort({date: -1})
    .exec()
}

// Lista de eventos com Data maior que uma dada
module.exports.listFromDate = data => {
    return Event
    .find({date: {$gte: date}})
    .sort({date: -1})
    .exec()
}

// Lista de noticias com Data maior que uma dada
module.exports.listUntilDate = date => {
    var date_object = new Date();
    var actual_date = date_object.getDate() + '-' + date_object.getMonth() + '-' + date_object.getFullYear();

    return Event
    .find({date: {$gte: actual_date, $lte: date}})
    .sort({date: -1})
    .exec()
}

// Lista de eventos por Data
module.exports.listByExactDate = data => {
    return Event
    .find({date: date})
    .sort({date: -1})
    .exec()
}

// Devolve a informação do evento por id
module.exports.getById = id => {
    return Event
    .findOne({_id: id})
    .exec()
}

module.exports.insert = event => {
    return Event.create(event)
}

module.exports.updateEvent = async (_id,local,theme,description,date,hour,duration,author,utype) => {
    event = await this.getById(_id)

    if(!event)
        throw new Error("Evento não encontrado!")
    
    if(!date)
        date = event.date
    
    if(!hour)
        hour = event.hour
    
    if(!duration)
        duration = event.duration

    if(utype==0 || event.author==author) {
        await Event.update({_id: _id},{$set: {local: local, theme: theme, description: description, date: date, hour: hour, duration: duration}})
            .exec()
    } else {
        console.log("User type: " + utype)
        throw new Error("User Invalido")
    }
}

module.exports.delete = async (id,email,utype) => {
    event = await this.getById(id)

    if(utype==0 || event.author==author) {
        await Event
            .remove({_id: id })
            .exec()
    } else throw new Error("User Invalido")
}