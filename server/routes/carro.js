var router = require("express").Router();
var mongoose = require("mongoose");

router.get("/:search", (req, res) => {

	var endResult = {winner:"hola!"}
	res.json(endResult);
	
});

module.exports = router;