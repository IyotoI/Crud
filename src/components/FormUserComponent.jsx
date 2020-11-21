import React from "react";

const FormUserComponent = (props) => (
	<article>
		<form onSubmit={props.modeEdition ? props.handleEdit : props.handleSubmit}>
			<input
				name="name"
				value={props.inputValues.name}
				onChange={props.handleChange}
			/>
			<input type="submit" value={props.modeEdition ? "Editar" : "Agregar"} />
			{props.modeEdition && (
				<input
					type="button"
					onClick={() => props.cancelEdit()}
					value="Cancelar"
				/>
			)}
		</form>
	</article>
);

export default FormUserComponent;
