const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({

	search: String,
	count: Number
	
});

module.exports = mongoose.model("Search", SearchSchema);