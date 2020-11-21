import React from "react";
import TableUserComponent from "./TableUserComponent";
import TitleTableUserComponent from "./TitleTableUserComponent";

const ViewTableUserComponent = (props) => {
	const deleteUser = (id) => {
		const option = window.confirm("¿Esta seguro?");
		if (option) {
			props.deleteUser(id);
		}
	};

	const editUser = (item) => {
		props.setItemSelected(item);
		props.setRoute("formUser");
		props.setModeEdition(true);
	};

	return (
		<article>
			<TitleTableUserComponent setRoute={props.setRoute} />
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
					</tr>
				</thead>
				<tbody>
					{props.users.map((u) => (
						<TableUserComponent
							deleteUser={deleteUser}
							editUser={editUser}
							user={u}
							key={u.id}
						/>
					))}
				</tbody>
			</table>
		</article>
	);
};

export default ViewTableUserComponent;
