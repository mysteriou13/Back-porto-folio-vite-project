const express = require('express');
const router = express.Router();


const {AddNavMenu} = require("../Controller/ControllerNavmenu")

router.post("/addnavmenu",AddNavMenu)

module.exports = router;