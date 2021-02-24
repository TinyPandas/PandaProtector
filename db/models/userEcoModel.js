var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

var Schema = mongoose.Schema;

var userEcoModelSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    balance: {
        type: Long,
        required: true
    },
    login: {
        type: Long,
        default: 0
    }
})

module.exports = mongoose.model('userEco', userEcoModelSchema);