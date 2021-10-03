import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
	function changeText(event) {
		event.preventDefault();
		alert("No audio");
	}

	if (props.phonetic.audio) {
		return (
			<div className="Phonetic">
				<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
					Listen
				</a>{" "}
				{""}
				<span className="pronounce"> {props.phonetic.text} </span>
			</div>
		);
	} else {
		return (
			<div>
				<button className="btn noAudio" onClick={changeText}>
					Listen
				</button>
				<span className="pronounce"> {props.phonetic.text} </span>
			</div>
		);
	}
}
