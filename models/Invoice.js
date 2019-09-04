const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceNumber: {
        type: Number,
        required: true,
    },
    paymentTerms: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;