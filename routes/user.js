const express = require('express');
const router = express.Router();

const { InscriptionUser,LoginUser } = require("../Controller/ControllerUser");
const {authMiddleware} = require("../Middleware/middleware")


router.post('/inscription', InscriptionUser);
router.post("/login",LoginUser);
router.get("/zone_admin",authMiddleware);

module.exports = router;
