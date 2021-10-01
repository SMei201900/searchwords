import React from "react";

export default function Synonym(props) {
	if (props.synonym) {
		return (
			<ul>
				{props.synonym.map(function (synonym, index) {
					return <li key={index}>{synonym}</li>;
				})}
			</ul>
		);
	} else {
		return null;
	}
}
