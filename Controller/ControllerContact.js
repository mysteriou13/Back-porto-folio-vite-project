
const {ContactModel} = require("../Model/ModelContact")

const AddContact = async(req) =>{

     try{
        ContactModel.insertOne({...req.body})
    
    }catch(e){
        console.log("error contact",e)
    }

}

module.exports = {
    AddContact
}