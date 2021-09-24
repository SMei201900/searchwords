import React from "react";

export default function Meaning(props) {
	return (
		<div className="meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<em>Example Sentence: {definition.example}</em>
						<br />
					</div>
				);
			})}
		</div>
	);
}
