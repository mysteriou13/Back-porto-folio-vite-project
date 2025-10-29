
const {Nav} = require("../Model/ModelNavMenu")

/*add link in nav menu*/
const AddNavMenu = async(req,res) =>{
    console.log("addmenu",req.body)
     try{
    Nav.insertOne({...req.body})
      res.json({message:"link ajouter au menu de navigation"})
     }catch(e){
       console.error(error)
     }
}

/*Update navmenu*/
const UpdateNavMenu = async(req,res) =>{

  const data = req.body;

  const filter = {id:req.body._id };
  const update = {...data};

 let nav = await Nav.findOneAndUpdate(filter,update)  
 nav = data;
  console.log("data updatenavmenu",nav);
}

/*read navlink*/
const ReadNavMenu = async (req, res) => {
  try {
    const data = await Nav.find(); // 🔹 attendre la Promise
    console.log("read navmenu",data);
    res.status(200).json({data}); // 🔹 renvoyer les données au client
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
    AddNavMenu,
    ReadNavMenu,
    UpdateNavMenu
}