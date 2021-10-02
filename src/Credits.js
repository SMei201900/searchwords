import React from "react";
import "./Credits.css";

export default function Credits() {
	return (
		<div className="credits">
			<br />
			<footer>
				<a
					className="codeSource"
					href="https://github.com/SMei201900/searchwords"
					target="_blank"
					rel="noreferrer"
				>
					Open source code
				</a>{" "}
				by:{" "}
				<a
					className="profile"
					href="https://www.linkedin.com/in/sally-mei-1a4439210/"
					target="_blank"
					rel="noreferrer"
				>
					Sally Mei
				</a>
				. Hosted by{" "}
				<a
					className="hostSite"
					href="https://vigorous-mcnulty-ccc11c.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Netlify
				</a>
				.
			</footer>
		</div>
	);
}
