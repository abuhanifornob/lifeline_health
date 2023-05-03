const mongoose = require("mongoose");

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
}
module.exports = connectDb;
