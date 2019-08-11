
const mongoose = require('mongoose');

const schema = mongoose.Schema({
   name: String,
   tuitionInState: Number,
   tuitionOutOfState: Number,
   roomAndBoard: Number
});

schema.index({
    name: 'text'
});

module.exports = schema;
