const mongoose = require("mongoose");

const blogSchema= mongoose.Schema({
        // userpostInfo: { "userId": "001", userName: "John Doe", "userEmail": "johndoe@gmail.com" },
        // postId:1,
        // headline: "14 Ways Json Can Improve Your SEO",
        // image: "http://example.com/image.jpg",
        // Author: "John Doe",
        // genre: "search engine optimization",
        // datePublished: "2015-09-20",
        // description: "Grabbing a quick cola or a chilled drink from the refrigerator might seem like it quenches your thirst during summer. But carbonated drinks are highly processed and contain high sugar and no nutrient value. Experts say switching to naturally available drinks for summer like mango drinks, lemonade and tender coconut water is far better than carbonated drinks. It boosts your energy level and make you active and productive during summer.The summer lasts only for a couple of months in any demographic region, but our habit is to pull out that carbonated drink from the refrigerator. It becomes a habit and individuals end up consuming a lot of artificial sugars during the summer, says Dr Kavya Kadapi, consultant physician at Yukti Ayurveda Clinic, Bengaluru.",
        // comments: [{ "userCommentId": "0001", "comment": "very nice post" }]
        // userpostInfo:{
        //     type: Object,
        //     require:false
        // },
        // postId:{
        //     type: String
        // },
        // headline: {
        //     type: String
        // },
        // image: {
        //     type: String
        // },
        // Author: {
        //     type: String
        // },
        // genre: {
        //     type: String
        // },
        // datePublished: {
        //     type: Number
        // },
        // description: {
        //     type: String
        // },
        // comments: {
        //     type: Array
        // },
        userpostInfo:{
            type: Object
        },
        postId:{
            type: Number
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
export default mongoose.models.Blog || mongoose.model("Blog",  blogSchema, 'lifeline');