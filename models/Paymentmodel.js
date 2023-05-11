const mongoose = require("mongoose");

const paymentSchema=new mongoose.Schema({
       
        price:{
            type: Number,
            required:true, 
        }

})

export default mongoose.models.payment || mongoose.model("payment",  paymentSchema);