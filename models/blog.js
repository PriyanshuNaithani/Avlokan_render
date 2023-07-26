const  mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
     text: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("blog",schema);
