const mongoose = require("mongoose");

const appointmentSchema = {
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    number:{
        type:String,
        required:true 
    }
}

module.exports = mongoose.model("avlokan_api", appointmentSchema);