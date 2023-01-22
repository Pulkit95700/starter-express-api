const express = require("express");
const {sendPage} = require("../controllers/weatherController");

const router = express.Router();


router.post('/', sendPage);

module.exports = router;