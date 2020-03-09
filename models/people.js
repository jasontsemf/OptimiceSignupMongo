const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    "name": String,
    "email": String,
    "ordinal" : Number
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

const db = mongoose.model('people', peopleSchema);

module.exports = db;