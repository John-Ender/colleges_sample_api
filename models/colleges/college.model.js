
const mongoose = require('mongoose');
const schema = require('./college.schema');
const MODEL_NAME = 'College';

const model = mongoose.model(MODEL_NAME, schema);
model.on('index', (err) => err && console.warn(`[${MODEL_NAME}.index] Problem indexing: ` + err.message));

module.exports = model;
