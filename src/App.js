import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import NewUser from "./components/NewUser"
import UsersList from "./components/UsersList"

const BASE_USERS = [
	{
		id: "id1",
		name: "Denis",
		email: "denis@email.com",
		date: "Jan 26, 2022",
	},
	{
		id: "id2",
		name: "Peter",
		email: "peters@email.com",
		date: "Jan 27, 2022",
	},
]

function App() {
	// show new user modal
	const [isAddingUser, setIsAddingUser] = useState(false)

	function openAddNewUser() {
		setIsAddingUser(true)
	}

	function closeAddNewUser() {
		setIsAddingUser(false)
	}

	// passing user data
	const [users, addUser] = useState(BASE_USERS)

	function onSaveUserDataHandler(userData) {
		addUser((existingUsers) => {
			return [userData, ...existingUsers]
		})
		setIsAddingUser(false)
	}

	return (
		<article className='userslist container mx-auto p-3'>
			{isAddingUser && (
				<NewUser
					onSaveUserData={onSaveUserDataHandler}
					UserData={onSaveUserDataHandler}
					onCancel={closeAddNewUser}
				/>
			)}
			<div className='userslist__controls flex justify-between items-baseline mb-6'>
				<h1 className='text-2xl font-bold'>Manage users</h1>
				<Button onClick={openAddNewUser}>New user</Button>
			</div>
			<UsersList users={users} />
		</article>
	)
}

export default App
