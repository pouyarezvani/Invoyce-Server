const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})


const Item = mongoose.model('Item', itemSchema);
module.exports = Item;