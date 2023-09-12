const mongoose = require('mongoose');

const adressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: {
        type: Number,
        'default': 1000,
        max: 9999,
        min: 111
    }
});

const contactSchema = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String
    },
    email: String,
    phone: Number,
    typeContact: {
        type: String,
        'default': 'Work'
    },
    address: [adressSchema]
});

mongoose.model('Contact', contactSchema);
