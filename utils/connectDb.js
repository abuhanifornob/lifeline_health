const mongoose =require("mongoose")

async function connectDb(){
    try {
        const MONGO_URI=process.env.REACT_APP_mongouri
        // const blogsCollection = client.db('lifeline').collection('blogs');
        await mongoose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("connection succcess")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDb;