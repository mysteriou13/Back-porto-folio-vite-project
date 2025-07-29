const express = require('express');
const router = express.Router();

const { InscriptionUser,LoginUser } = require("../Controller/ControllerUser");


router.post('/inscription', InscriptionUser);
router.post("/login",LoginUser);

module.exports = router;
