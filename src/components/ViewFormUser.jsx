import React, { useState } from "react";
import FormUserComponent from "./FormUserComponent";
import TitleFormUser from "./TitleFormUser";
import shortid from "shortid";

const ViewFormUser = (props) => {
	const [inputValues, setInputValues] = useState({ id: null, name: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { id: shortid.generate(), ...inputValues };
		props.addUsers(user);
	};

	const handleChange = ({ target }) => {
		setInputValues({ [target.name]: target.value });
	};

	return (
		<section>
			<TitleFormUser />
			<FormUserComponent
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				inputValues={inputValues}
			/>
		</section>
	);
};

export default ViewFormUser;
