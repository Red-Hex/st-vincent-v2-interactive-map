const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    }
});

module.exports = Category = mongoose.model('category', CategorySchema);