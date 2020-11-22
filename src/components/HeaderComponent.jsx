import React from "react";

const HeaderComponent = (props) => (
	<header className="p-2 mb-3">
		<h3 className="text-white d-inline">{props.textH1}</h3>
		<button className="btn btn-primary float-right" onClick={props.action}>
			{props.textBtn}
		</button>
	</header>
);

export default HeaderComponent;
