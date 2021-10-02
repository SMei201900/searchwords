import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<div className="definition">{definition.definition}</div>
						<br />
						<div className="example">
							Example Sentence: {definition.example}
						</div>
						<br />
						<Synonym synonym={definition.synonyms} />
					</div>
				);
			})}
		</div>
	);
}
