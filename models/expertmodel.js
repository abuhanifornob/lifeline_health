const mongoose = require("mongoose");
const expertSchema =new  mongoose.Schema({

    doctors:{type:Object}   
})
export default mongoose.models.expert || mongoose.model("expert",  expertSchema);