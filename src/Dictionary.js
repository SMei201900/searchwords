import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();
		//documentation: https://dictionaryapi.dev/
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="dictionary">
			<section>
				<div className="searchEngine">
					<form onSubmit={search}>
						<input
							type="search"
							autoFocus={true}
							onChange={handleKeywordChange}
						/>
					</form>
					<div className="hint">
						Suggested words: sunset, forest, we, quiet, yoga, wine{" "}
					</div>
				</div>
			</section>
			<Results results={results} />
		</div>
	);
}
