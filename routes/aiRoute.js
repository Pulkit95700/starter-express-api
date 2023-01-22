const express = require("express");
const {getScript} = require("../controllers/aiController");

const router = express.Router();


router.post('/', getScript);

module.exports = router;