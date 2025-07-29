var jwt = require('jsonwebtoken');

const {users} = require("../Model/ModelUser")

const bcrypt = require('bcrypt');
/*add user*/
const InscriptionUser = async (req, res) => {
   console.log("inscription user");
    const { name, password } = req.body;
     const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt );

    const findUser =  await users.findOne({name:name});

    if(!findUser){
    console.log("user non trouver");

    users.insertOne({
        ...req.body,
        password:hash
         });

    }
    
    res.json({ message: "success" });
}

/*connection user*/
const LoginUser = async (req, res) => {
 
    console.log("login user");
    
    const { name, password } = req.body;

    const finduser =  await users.findOne({name:name})
    if(finduser){
     console.log("finduser",finduser);
     
     if(bcrypt.compareSync(password, finduser.password)){
        console.log("good password");
        var token = jwt.sign({ user:name }, 'shhhhh');
     }else{
        console.log("bad password");
     }

    }
  return res.status(200).json({ message: "Connexion réussie", token: token });
}

module.exports = {
    InscriptionUser,
    LoginUser
}
