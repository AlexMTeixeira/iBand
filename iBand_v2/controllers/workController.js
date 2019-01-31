var Work = require('../models/workModel')

module.exports.list = async () => {
    return await Work
            .find()
            .exec()
}
module.exports.getByTitle = tit => {
    return Work
        .findOne({title: tit})
        .exec()
        .catch(err => console.log('gbt error: '+err))
}
module.exports.insertInto = async (tit,instrument) => {
    work = await this.getByTitle(tit)

    if(!work)
        throw new Error('Titulo nao existe')
    await Work
        .update(
            {title: tit},
            {$push: {instruments:instrument}})
        .exec()
}
module.exports.insert = work => {
    return Work.create(work)
} 
