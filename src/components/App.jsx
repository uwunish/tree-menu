/*
Tree view component
recursive navigation menu
menu UI component
*/

import React from "react";
import MenuList from "./MenuList";

function App({ menus = [] }) {
	return (
		<div className="app-container-div">
			<MenuList list={menus} />
		</div>
	);
}

export default App;
