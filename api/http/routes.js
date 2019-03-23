const express = require("express");
const router = express.Router();

const pessoaController = require('./controllers').pessoa

router.get("/pessoa", pessoaController.findAll);

module.exports = router