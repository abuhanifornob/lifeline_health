const mongoose = require("mongoose");

const blogSchema=new mongoose.Schema({
       
        userpostInfo:{
            type: Object
        },
        postId:{
            type: String
        },
        headline: {
            type: String
        },
        image: {
            type: String
        },
        Author: {
            type: String
        },
        genre: {
            type: String
        },
        datePublished: {
            type: String
        },
        description: {
            type: String
        },
        comments: {
            type: Array
        }
        

})

export default mongoose.models.blog || mongoose.model("blog",  blogSchema);