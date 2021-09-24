import tempphoto from "./tempphoto.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
import Credits from "./Credits";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Dictionary</h1>
				<img src={tempphoto} className="cat" alt="cat" width={500} />
				<br />
				<main>
					{" "}
					<Dictionary />
				</main>
				<Credits />
			</div>
		</div>
	);
}
