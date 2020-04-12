import React from "react";
import logo from "../images/logo.svg";

const HomeView = () => {
	return (
		<div>
			<h1>Home View</h1>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		</div>
	);
};

export default HomeView;
