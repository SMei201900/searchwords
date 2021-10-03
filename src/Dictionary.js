import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);
	let [photos, setPhotos] = useState(null);

	function handleDictionResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelResponse(response) {
		setPhotos(response.data.photos);
	}

	function search(event) {
		event.preventDefault();
		//documentation: https://dictionaryapi.dev/
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleDictionResponse);

		let pexelApiKey =
			"563492ad6f917000010000019c2e5d7373bc4835ae2aee37ee79ae54";
		let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}}&per_page=9`;
		let headers = { Authorization: `Bearer ${pexelApiKey}` };
		axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="dictionary">
			<section className="results">
				<h1> What are you looking for?</h1>
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
			<Photos photos={photos} />{" "}
		</div>
	);
}
