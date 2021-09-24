import tempphoto from "./tempphoto.jpg";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Cats</h1>
				<img src={tempphoto} className="staringcat" alt="cat" width={500} />
			</header>
		</div>
	);
}
