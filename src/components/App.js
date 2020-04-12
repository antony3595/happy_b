import React, { useState } from "react";
import Baloons from "./baloons/Baloons";

import CongratulationBook from "./book_of_congrats/CongratulationBook";
import FacesRain from "./faces/FacesRain";

function App() {
	const [active, setActive] = useState(false);
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="page">
			<Baloons />
			<CongratulationBook isOpen={isOpen} setOpen={setOpen} setActive={setActive} />
			{active ? <FacesRain setActive={setActive} /> : null}
		</div>
	);
}

export default App;
