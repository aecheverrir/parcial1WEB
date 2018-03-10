import React from "react";

export function getInstagramData(component, filterH) {
	fetch("/api/search/:filterH?hashtag=" + filterH)
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
