import React from "react";

const styles = {
	display: "inline",
};

const TitleTableUserComponent = (props) => (
	<header>
		<h1 style={styles}>Usuarios</h1>
		<button onClick={() => props.setRoute("formUser")}>Formulario</button>
	</header>
);

export default TitleTableUserComponent;
