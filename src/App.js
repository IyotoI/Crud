import React, { useState } from "react";
import ViewFormUser from "./components/ViewFormUser";

const App = () => {
	const [users, setUsers] = useState([]);

	const addUsers = (item) => {
		setUsers([...users, item]);
	};

	return (
		<>
			<ViewFormUser setUsers={setUsers} addUsers={addUsers} />
		</>
	);
};

export default App;
