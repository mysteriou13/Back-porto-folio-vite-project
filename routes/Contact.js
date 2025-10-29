const express = require('express');
const router = express.Router();

const {AddContact} = require("../Controller/ControllerContact")

router.post("/Addcontact",AddContact);

module.exports = router;