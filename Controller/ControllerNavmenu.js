const {Nav} = require("../Model/ModelNavMenu")

/*add linl in nav menu*/

const AddNavMenu = async(req,res) =>{
    console.log("addmenu",req.body)
     try{
    Nav.insertOne({...req.body})
      res.json({message:"link ajouter au menu de navigation"})
     }catch(e){

     }
}

module.exports = {
    AddNavMenu
}