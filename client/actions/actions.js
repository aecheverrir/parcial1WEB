import React from "react";

export function getInstagramData(component, filter) {
	fetch("api/search/:filter?hashtag=" + filter)
	.then(results => {
		console.log("1");
		return results.json();
	}).then(result => {
		console.log("2");
		console.log(result);
		component.setState({winner: result.winner});
		return result;
	});
}
