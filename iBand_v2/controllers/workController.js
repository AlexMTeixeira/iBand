var Work = require('../models/workModel')

module.exports.list = async () => {
    return await Work
            .find()
            .exec()
}

module.exports.insert = work => {
    return Work.create(work)
} 
