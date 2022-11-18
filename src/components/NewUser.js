import { useState } from "react"
import Modal from "./Modal"
import TextInput from "./TextInput"
import Button from "./Button"

function NewUser(props) {
	const [enteredName, setEnteredName] = useState("")
	const [enteredEmail, setEnteredEmail] = useState("")
	const [error, setError] = useState("")

	function nameEnterHandler(event) {
		setEnteredName(event.target.value)
	}

	function emailEnterHandler(event) {
		setEnteredEmail(event.target.value)
	}

	function formSubmitHandler(event) {
		event.preventDefault()

		if (
			enteredName.trim().length === 0 ||
			enteredEmail.trim().length === 0
		) {
			setError({
				title: "Can't submit empty form",
				message: "Enter a valid name and email to submit.",
			})
			return
		}

		const userData = {
			id: Math.random().toString(),
			name: enteredName,
			email: enteredEmail,
			date: "just now",
		}

		props.onSaveUserData(userData)
		setEnteredEmail("")
		setEnteredEmail("")
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
					<TextInput
						label='Name'
						placeholder='Volodya Sr'
						type='text'
						onChange={nameEnterHandler}
						value={enteredName}
					/>
					<TextInput
						label='Email'
						placeholder='volodya@email.com'
						type='email'
						onChange={emailEnterHandler}
						value={enteredEmail}
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
