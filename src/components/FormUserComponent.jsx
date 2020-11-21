import React from "react";

const FormUserComponent = (props) => (
	<article>
		<form onSubmit={props.handleSubmit}>
			<input
				name="name"
				value={props.inputValues.name}
				onChange={props.handleChange}
			/>
			<input type="submit" />
		</form>
	</article>
);

export default FormUserComponent;
