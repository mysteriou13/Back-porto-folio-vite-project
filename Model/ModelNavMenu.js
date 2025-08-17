const mongoose  = require("mongoose");
const { Schema } = mongoose;


const NavMenu = new Schema({
    name:String,
    address:String,
    typelink:String,
})

const Nav = mongoose.model("nav",NavMenu)

module.exports={
    Nav
}