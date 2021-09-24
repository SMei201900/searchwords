import tempphoto from "./tempphoto.jpg";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Cats</h1>
			<img src={tempphoto} className="staringcat" alt="cat" width={500} />
			<div>
				<span className="credit">
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
					</a>{" "}
					and{" "}
					<a
						className="hostSite"
						href="https://vigorous-mcnulty-ccc11c.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						hosted by Netlify
					</a>
				</span>
			</div>{" "}
		</div>
	);
}
