import React from "react";

const TableUserComponent = (props) => (
	<tr>
		<td>{props.user.name}</td>
		<td>
			<button
				className="btn btn-warning btn-sm"
				onClick={() => props.editUser(props.user)}
			>
				Editar
			</button>
		</td>
		<td>
			<button
				className="btn btn-danger btn-sm"
				onClick={() => props.deleteUser(props.user.id)}
			>
				Eliminar
			</button>
		</td>
	</tr>
);

export default TableUserComponent;
