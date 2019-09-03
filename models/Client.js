const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        max: 10,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
        max: 10,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})


const Client = mongoose.model('Client', clientSchema);
module.exports = Client;