import UserlistUser from "./UsersItem"

function UsersList(props) {
	return (
		<div className='userslist__table border-t'>
			<div className='users__tr grid grid-cols-3 gap-x-3'>
				<span className='italic'>Name</span>
				<span className='italic'>Email</span>
				<span className='italic text-right'>Date added</span>
			</div>
			{props.users.map((user) => (
				<UserlistUser
					key={user.id}
					name={user.name}
					email={user.email}
					date={user.date}
				/>
			))}
		</div>
	)
}

export default UsersList
