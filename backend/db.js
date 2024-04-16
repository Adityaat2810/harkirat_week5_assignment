const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
       
    },
    linkedInUrl:{
        type: String,
        required: true

    },
    twitterUrl:{
        type: String,
        required: true

    },
    githubUrl:{
        type: String,
        required: true

    }
})

const CardSchema = mongoose.model('Card', cardSchema); // Changed model name to 'Card'

module.exports = CardSchema;