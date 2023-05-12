const mongoose = require("mongoose");

const doctorSchema=new mongoose.Schema({
    name:{type:String},   
    email:{type:String},   
    timeSlot:{type:Array} ,  
    imgUrl:{type:String},   
    phone:{type:String},   
    studyingInstitute:{type:String} ,  
    degree:{type:String},  
    specialization:{type:String} ,  
    serviceDatails:{type:Object},   
    workplace:{type:String},   
    about:{type:String} ,  
    experience:{type:String} ,  
    fees:{type:String} , 

})

export default mongoose.models.doctor || mongoose.model("doctor",  doctorSchema);