import tempphoto from "./tempphoto.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Cats</h1>
				<img src={tempphoto} className="cat" alt="cat" width={500} />
				<br />
				<main>
					{" "}
					<Dictionary />
				</main>
				<footer> Open Source Code by Sally Mei</footer>
			</div>
		</div>
	);
}
