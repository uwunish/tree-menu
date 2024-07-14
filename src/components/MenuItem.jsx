import React, { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	function handleToggleClick(label) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[label]: !displayCurrentChildren[label],
		});
	}

	console.log("children" in item);

	return (
		<li className="menuItem-container">
			<div className="item-div">
				<p>{item.label}</p>
				{item && item.children && item.children.length > 0 ? (
					<span onClick={() => handleToggleClick(item.label)}>
						{displayCurrentChildren[item.label] ? "-" : "+"}
					</span>
				) : null}
			</div>
			{"children" in item && displayCurrentChildren[item.label] ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
}

export default MenuItem;
