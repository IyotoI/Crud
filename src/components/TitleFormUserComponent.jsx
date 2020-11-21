import React from "react";

const styles = { display: "inline" };

const TitleFormUser = (props) => (
	<header>
		<h1 style={styles}>{props.modeEdition ? "Editar" : "Agregar"} usuarios</h1>
		<button onClick={() => props.setRoute("tableUser")}>Lista</button>
	</header>
);

export default TitleFormUser;
