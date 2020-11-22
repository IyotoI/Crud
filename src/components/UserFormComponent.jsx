import React from "react";

const UserFormComponent = (props) => (
	<article className=" p-2">
		<form onSubmit={props.modeEdition ? props.handleEdit : props.handleSubmit}>
			<div className="form-group">
				<input
					name="name"
					value={props.inputValues.name}
					onChange={props.handleChange}
					className="form-control"
					placeholder="Nombre"
				/>
			</div>
			{props.modeEdition ? (
				<>
					<input
						className="btn btn-warning mr-2"
						type="submit"
						value="Editar"
					/>
					<input
						className="btn btn-danger"
						type="button"
						onClick={() => props.cancelEdit()}
						value="Cancelar"
					/>
				</>
			) : (
				<input type="submit" className="btn btn-primary" value="Agregar" />
			)}
		</form>
	</article>
);

export default UserFormComponent;
