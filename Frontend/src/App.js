import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [checkedOne, setCheckedOne] = useState(false);
	const [checkedTwo, setCheckedTwo] = useState(false);

	const handleChangeOne = () => {
		setCheckedOne(!checkedOne);
		setCheckedTwo(false);
	};

	const handleChangeTwo = () => {
		setCheckedTwo(!checkedTwo);
		setCheckedOne(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://async-network.s3.ap-south-1.amazonaws.com/spaceship.png"
					className="App-logo"
					alt="logo"
				/>
				<form>
					<label>
						Entry fees:
						<input type="number" name="num" />
					</label>
					<br />
					<label>
						Higher:
						<input
							type="checkbox"
							checked={checkedOne}
							onChange={handleChangeOne}
							name="higher"
						/>
					</label>
					<br />
					<label>
						Lower:
						<input
							type="checkbox"
							checked={checkedTwo}
							onChange={handleChangeTwo}
							name="lower"
						/>
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</header>
		</div>
	);
}

export default App;
