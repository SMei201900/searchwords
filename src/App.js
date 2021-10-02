import book from "./book.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
import Credits from "./Credits";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Dictionary</h1>
				<img src={book} className="book" alt="book" width={500} />
				<br />
				<main>
					{" "}
					<Dictionary />
				</main>
				<section>
					{" "}
					<Credits />{" "}
				</section>
			</div>
		</div>
	);
}
