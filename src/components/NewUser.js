import { useState, useRef } from "react"
import Modal from "./Modal"
import TextInput from "./TextInput"
import Button from "./Button"

function NewUser(props) {
	const nameInputRef = useRef()
	const emailInputRef = useRef()

	const [error, setError] = useState("")

	function formSubmitHandler(event) {
		event.preventDefault()
		const enteredUserName = nameInputRef.current.value
		const enteredUserEmail = emailInputRef.current.value

		if (
			enteredUserName.trim().length === 0 ||
			enteredUserEmail.trim().length === 0
		) {
			setError({
				title: "Can't submit empty form",
				message: "Enter a valid name and email to submit.",
			})
			return
		}

		const userData = {
			id: Math.random().toString(),
			name: enteredUserName,
			email: enteredUserEmail,
			date: "just now",
		}

		props.onSaveUserData(userData)

		// shouldn't be used normally, consider useState() hook instead to reset
		nameInputRef.current.value = ""
		emailInputRef.current.value = ""
	}

	function errorHandler() {
		setError(null)
	}

	return (
		<Modal
			modalTitle='Add new user'
			error={error}
			errorTitle={error.title}
			errorMessage={error.message}
			errorHandler={errorHandler}
			onCancel={props.onCancel}
		>
			<form onSubmit={formSubmitHandler}>
				<fieldset>
					<input
						label='Name'
						placeholder='Volodya Sr'
						type='text'
						ref={nameInputRef}
					/>
					<input
						label='Email'
						placeholder='volodya@email.com'
						type='email'
						ref={emailInputRef}
					/>
				</fieldset>
				<div className='flex flex-col gap-y-2 mt-4'>
					<Button
						type='submit'
						size='lg'
					>
						Add user
					</Button>
					<Button
						kind='secondary'
						size='lg'
						onClick={props.onCancel}
					>
						Cancel
					</Button>
				</div>
			</form>
		</Modal>
	)
}

export default NewUser
