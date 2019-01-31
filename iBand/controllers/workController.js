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
module.exports.insert = work => {
    return Work.create(work)
} 
module.exports.delete = async id =>{
    await Work.remove({_id:id})
            .exec()
}
