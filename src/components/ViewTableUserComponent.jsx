import React from "react";
import TableUserComponent from "./TableUserComponent";
import HeaderComponent from "./HeaderComponent";

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
			<HeaderComponent
				textH1="Usuarios"
				textBtn="Formulario"
				action={() => props.setRoute("formUser")}
			/>
			<div>
				<table className="table table-dark table-bordered ">
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Editar</th>
							<th scope="col">Eliminar</th>
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
			</div>
		</article>
	);
};

export default ViewTableUserComponent;
