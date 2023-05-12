const mongoose = require("mongoose");

const bookingSchema=new mongoose.Schema({
    date:{type:String},   
    data:{type:Object},   
    user:{type:Object} ,  
    fees:{type:String},   
    doctorID:{type:String},    
    serviceDatails:{type:Object},    
    payment:{type:String},    

})

export default mongoose.models.bookings || mongoose.model("bookings",  bookingSchema);