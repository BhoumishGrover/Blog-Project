const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    sub_title: {
        type: String
    },
    Content: {
        type: String
    },
    author:{
        type: String
    },
    publish_date: {
        type: Date,
        default: ()=> Date.now()
    },
    
});