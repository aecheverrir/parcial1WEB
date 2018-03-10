var router = require("express").Router();
var mongoose = require("mongoose");
var Search = require("../models/Search");
var fetchUrl = require("fetch").fetchUrl;

router.get("/:search", (req, res) => {

	console.log(req.query.hashtag);

	var hashBusqueda = req.query.hashtag;
	var urlbusq = "https://www.instagram.com/explore/tags/"+hashBusqueda+"/?__a=1";

	let ganador = "hello";

	console.log("el URL: " + urlbusq);

	fetchUrl(urlbusq, function(error, meta, body){

    	//console.log(body.toString());
    	//PRUEBA hasta hoja: edges = JSON.parse(body).graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.id;
    	posts = JSON.parse(body).graphql.hashtag.edge_hashtag_to_top_posts.edges
    	//console.log(edges);

    	//Obtaining all words
    	var words = [];
    	posts.map((post) => {
			postWords = post.node.edge_media_to_caption.edges[0].node.text.split(" ");
			postWords.map((word) => {
				words.push(word);
			}) 
		});

    	//Obtaining all tags, different from the one in the instafight
		let dCount = {};
		var tags = [];
		words.map((wordTag) => {
			if(wordTag.startsWith("#")){
				varWord = wordTag.split("#");
				if(varWord[1] != hashBusqueda){
					tags.push(wordTag);
				}
			}
		});

		tags.map((tag) => {
			console.log(tag);
		})

		//Dictionary to keep track of repetitions
		var dict = {};

		tags.map((tag) => {
			if(dict[tag] != undefined){
				console.log("true in dic");
				dict[tag] = dict[tag]+1;
			}
			else{
				console.log("false in dic");
				dict[tag] = 1;
			}
		});

		console.log(dict);

		let max = 0;

		for(var key in dict){
			var value = dict[key];
			console.log(value);
			console.log(max);
			console.log(ganador);
			if(value > max){
				max = value;
				ganador = key;
			}
		}
		res.json({winner:ganador});
	});

	
});

module.exports = router;