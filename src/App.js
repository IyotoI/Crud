import React, { useState } from "react";
import UserFormContainer from "./containers/UserFormContainer";
import TableUserContainer from "./containers/TableUserContainer";

const App = () => {
	const [users, setUsers] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);
	const [route, setRoute] = useState("formUser");
	const [modeEdition, setModeEdition] = useState(false);

	const addUsers = (item) => setUsers([...users, item]);

	const deleteUser = (id) => {
		const newUsers = users.filter((u) => u.id !== id);
		setUsers(newUsers);
	};

	const editUser = (item) => {
		const user = { id: itemSelected.id, ...item };
		const newUsers = users.map((u) => (u.id === user.id ? user : u));
		setUsers(newUsers);
	};

	return (
		<section className="bg-dark row align-items-center vh-100 justify-content-center m-0">
			<div className="col-11 col-sm-11 col-md-8 col-lg-6">
				{route === "formUser" && (
					<UserFormContainer
						itemSelected={itemSelected}
						setUsers={setUsers}
						setRoute={setRoute}
						addUsers={addUsers}
						modeEdition={modeEdition}
						editUser={editUser}
						setItemSelected={setItemSelected}
						setModeEdition={setModeEdition}
					/>
				)}
				{route === "tableUser" && (
					<TableUserContainer
						setItemSelected={setItemSelected}
						users={users}
						setRoute={setRoute}
						deleteUser={deleteUser}
						setModeEdition={setModeEdition}
					/>
				)}
			</div>
		</section>
	);
};

export default App;
