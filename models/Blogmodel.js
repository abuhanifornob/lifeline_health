const mongoose = require("mongoose");

const blogSchema=new mongoose.Schema({
       
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
// const expertSchema=new mongoose.Schema({
    
//     //    { "doctors": {
//     //         "doctor": [
//     //             {
//     //                 "id": "1",
//     //                 "firstName": "Tom",
//     //                 "lastName": "Cruise",
//     //                 "slug": "medicine",
//     //                 "service": "Doctor Consultation",
//     //                 "photo": "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg?size=626&ext=jpg",
//     //                 "speciality": "Cardiologists",
//     //                 "education": [
//     //                     {
//     //                         "degree_name": "MBBS",
//     //                         "university": "Dhaka Medical college",
//     //                         "year": "2012-2016",
//     //                         "result": "4 of 3.63"
//     //                     },
//     //                     {
//     //                         "degree_name": "Bachelor of Medicine",
//     //                         "university": "Dhaka Medical college",
//     //                         "year": "2017-2019",
//     //                         "result": "4 of 3.99"
//     //                     }
//     //                 ],
//     //                 "intern": {
//     //                     "department": "Cardiologists",
//     //                     "hospital": "Rajshahi Medical college",
//     //                     "year": "2020-2022"
//     //                 },
//     //                 "experience": [
//     //                     {
//     //                         "hospital_num": "01",
//     //                         "hospital_name": "Naogaon Medical",
//     //                         "year": "2023-2025",
//     //                         "surgery": "95",
//     //                         "experience":"23"
//     //                     },
//     //                     {
//     //                         "hospital_num": "02",
//     //                         "hospital_name": "Rajshahi Medical",
//     //                         "year": "2023-2025",
//     //                         "surgery": "105",
//     //                         "experience":"13"
//     //                     }
//     //                 ],
//     //                 "License": "Dhaka Medical College & Hospital"
//     //             },
//     //         },
//             doctors:{type:Object}    
// })
// const Blog = mongoose.model('blog', blogSchema);
// const Expert = mongoose.model('expert', expertSchema);
  
// Exporting our model objects
// module.exports = {
//     Blog,Expert
// }
export default mongoose.models.blog || mongoose.model("blog",  blogSchema);