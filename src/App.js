import React, { useState } from "react";
import ViewFormUserComponent from "./components/ViewFormUserComponent";
import ViewTableUserComponent from "./components/ViewTableUserComponent";

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
		<section>
			{route === "formUser" && (
				<ViewFormUserComponent
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
				<ViewTableUserComponent
					setItemSelected={setItemSelected}
					users={users}
					setRoute={setRoute}
					deleteUser={deleteUser}
					setModeEdition={setModeEdition}
				/>
			)}
		</section>
	);
};

export default App;
