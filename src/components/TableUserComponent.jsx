import React from "react";

const TableUserComponent = (props) => (
	<tr>
		<td>{props.user.name}</td>
		<td>
			<button onClick={() => props.editUser(props.user)}>Editar</button>
		</td>
		<td>
			<button onClick={() => props.deleteUser(props.user.id)}>Eliminar</button>
		</td>
	</tr>
);

export default TableUserComponent;
