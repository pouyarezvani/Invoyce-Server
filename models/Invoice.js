const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    poNumber: {
        type: Number,
        required: true,
    },
    paymentTerms: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
})


const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;