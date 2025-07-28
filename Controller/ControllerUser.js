const {users} = require("../Model/ModelUser")
const bcrypt = require('bcrypt');
/*add user*/
const InscriptionUser = async (req, res) => {
 
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

const LoginUser = (req, res) => {
    // À implémenter
}

module.exports = {
    InscriptionUser,
    LoginUser
}
