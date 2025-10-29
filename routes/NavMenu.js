const express = require('express');
const router = express.Router();


const {AddNavMenu, ReadNavMenu,UpdateNavMenu} = require("../Controller/ControllerNavmenu")

const {authMiddleware} = require("../Middleware/middleware")

router.post("/addnavmenu",authMiddleware,AddNavMenu)
router.put("/updatenavmenu",authMiddleware,UpdateNavMenu)

router.get("/readnavmenu",ReadNavMenu);

module.exports = router;