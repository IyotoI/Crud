import React from "react";

const TableUserComponent = (props) => (
	<tr >
		<td style={props.styles}>{props.user.name}</td>
		<td style={props.styles}>
			<button
				className="btn btn-warning btn-sm"
				onClick={() => props.editUser(props.user)}
			>
				Editar
			</button>
		</td>
		<td style={props.styles}>
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
