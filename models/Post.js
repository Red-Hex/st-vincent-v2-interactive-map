const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image: {
        type: Image
    },
    name: {
        type: String
    },
    category_id: {
        type: Number
    },
    description: {
        type: String
    },
    longitude: {
        type: Number
    },
    lattitude: {
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = Post = mongoose.model('post', PostSchema);