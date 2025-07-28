const mongoose  = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({

    name:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }

})

const users  = mongoose.model("user",userSchema)

module.exports={
    users
}