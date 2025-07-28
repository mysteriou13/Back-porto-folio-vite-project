const express = require('express');
const router = express.Router();

const { InscriptionUser } = require("../Controller/ControllerUser");


router.post('/inscription', InscriptionUser);

module.exports = router;
