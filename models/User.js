const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        default: "https://partners.salesforce.com/resource/tdxlib/img/large-default-user.png"
    },
    slug: {
        type: String,
    },
    signup_date: {
        type: Date,
        default: Date.now,
    },
    invoices: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Invoice'
        }
    ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;