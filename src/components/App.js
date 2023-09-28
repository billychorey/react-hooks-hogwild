import React from "react";
import Nav from "./Nav";
import Hogpen from "./Hogpen";
import HogCard from "./HogCard";

import hogs from "../porkers_data";


function App() {



	return (
		<div className="App">
			<Nav />
			<Hogpen hogs={hogs}>
				<HogCard />
			</Hogpen>
		</div>
	);
} 

export default App;
