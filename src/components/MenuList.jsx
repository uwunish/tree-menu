import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list }) {

	return (
		<ul className="menuList-container">
			{list && list.length
				? list.map((listItem) => <MenuItem item={listItem} />)
				: null}
		</ul>
	);
}

export default MenuList;
