const mongoose = require("mongoose");

<<<<<<< HEAD
async function connectDb() {
  try {
    const MONGO_URI =
      "mongodb+srv://lifeline:oagbheCCYxtBGuEs@cluster0.wfqwiph.mongodb.net/Lifeline?retryWrites=true&w=majority";
    console.log("Db Connection Error", MONGO_URI);
    // const blogsCollection = client.db('lifeline').collection('blogs');
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection succcess");
  } catch (error) {
    console.log(error);
  }
=======
async function connectDb(){
    try {
        const MONGO_URI="mongodb+srv://lifeline:oagbheCCYxtBGuEs@cluster0.wfqwiph.mongodb.net/Lifeline?retryWrites=true&w=majority"
        // const blogsCollection = client.db('lifeline').collection('blogs');
        await mongoose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("connection succcess")
    } catch (error) {
        console.log(error)
    }
>>>>>>> ff8693a17f8bb31a9b5eb063751d6a1527973ed7
}
module.exports = connectDb;
