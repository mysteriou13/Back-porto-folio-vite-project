const moongose = require("mongoose");
const{Schema} = moongose

const ContactSchema  = new Schema({

name:String,
email:String,
message:String

})

const ContactModel  =  moongose.model("contact",ContactSchema)

module.exports ={
    ContactModel
}