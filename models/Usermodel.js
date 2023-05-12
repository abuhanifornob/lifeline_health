const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{type:String},   
    userID:{type:String},   
    userImg:{type:String},
    userPhone:{type:String}, 
    userEmail:{type:String} 
    

})

export default mongoose.models.user || mongoose.model("user",  userSchema);