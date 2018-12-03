var Event = require('../models/eventModel')

// Lista de eventos
module.exports.listar = () => {
    return Event
    .find()
    .sort({date: -1})
    .exec()
}

// Lista de eventos por Tipo
module.exports.listarTipo = tipo => {
    return Event
    .find({tipo: tipo})
    .sort({date: -1})
    .exec()
}

// Lista de eventos com Data maior que uma dada
module.exports.listarData = data => {
    return Event
    .find({date: {$gte: date}})
    .sort({date: -1})
    .exec()
}

// Lista de eventos por Data
module.exports.listarDataExata = data => {
    return Event
    .find({date: date})
    .sort({date: -1})
    .exec()
}

// Devolve a informação do evento por id
module.exports.consultar = id => {
    return Event
    .findOne({_id: id})
    .exec()
}


// Insere um evento na agenda
/* module.exports.inserir = evento => {
    var novo = new Evento(evento)
    return new Promise( (fulfill, reject) => {
        novo.save( erro => {
            if (erro) reject({erro: 'Erro no envio à BD'})
            else fulfill({ok: 'Registo inserido na BD'})
        })
    })
} */

module.exports.inserir = event => {
    return Event.create(event)
}