import React, { useState, useEffect } from "react";
import FormUserComponent from "./FormUserComponent";
import shortid from "shortid";
import HeaderComponent from "./HeaderComponent";

const ViewFormUser = (props) => {
	const initialStateForm = { id: null, name: "" };
	const [inputValues, setInputValues] = useState(initialStateForm);

	useEffect(() => {
		if (props.itemSelected) {
			setInputValues(props.itemSelected);
		}
		// eslint-disable-next-line
	}, []);

	const handleChange = ({ target }) => {
		setInputValues({ [target.name]: target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValues.name) {
			const user = { id: shortid.generate(), ...inputValues };
			props.addUsers(user);
			setInputValues(initialStateForm);
			props.setRoute("tableUser");
		} else {
			alert("Campo vacio");
		}
	};

	const handleEdit = (e) => {
		e.preventDefault();
		if (inputValues.name) {
			props.editUser(inputValues);
			setInputValues(initialStateForm);
			props.setItemSelected(null);
			props.setRoute("tableUser");
			props.setModeEdition(false);
		} else {
			alert("Campo vacio");
		}
	};

	const cancelEdit = () => {
		props.setModeEdition(false);
		props.setItemSelected(null);
		setInputValues(initialStateForm);
		props.setRoute("tableUser");
	};

	return (
		<article>
			<HeaderComponent
				textH1={props.modeEdition ? "Editar usuarios" : "Agregar usuarios"}
				textBtn="Lista"
				action={() => props.setRoute("tableUser")}
			/>
			<FormUserComponent
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				inputValues={inputValues}
				modeEdition={props.modeEdition}
				handleEdit={handleEdit}
				cancelEdit={cancelEdit}
			/>
		</article>
	);
};

export default ViewFormUser;
