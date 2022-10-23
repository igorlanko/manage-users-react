function UsersItem(props) {
	return (
		<div className='userlist__tr grid grid-cols-3 gap-x-3'>
			<span className='italic'>{props.name}</span>
			<span className='italic'>{props.email}</span>
			<span className='italic text-right'>{props.date}</span>
		</div>
	)
}

export default UsersItem
