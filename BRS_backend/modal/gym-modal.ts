const mongoosee = require('mongoose');

const dataSchema = new mongoosee.Schema({
    name: 'string',
    description: 'string',
    imageUrl: 'string'
})

module.exports = mongoosee.model('gymlist', dataSchema)