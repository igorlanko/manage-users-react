import { Input } from "postcss"
import { useState } from "react"
import Button from "./Button"
import Notification from "./Notification"
import TextInput from "./TextInput"

function Modal(props) {
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
		<div className='modal flex flex-col justify-end absolute inset-0 z-10'>
			<div className='modal__content p-4 pt-12 bg-slate-50 w-full'>
				<h2 className='text-lg font-semibold mb-4'>Add new user</h2>
				{error && (
					<Notification
						title={error.title}
						message={error.message}
						onDismiss={errorHandler}
					/>
				)}
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
			</div>
			<div
				onClick={props.onCancel}
				className='modal__bg absolute inset-0 bg-slate-900 opacity-75 -z-10'
			></div>
		</div>
	)
}

export default Modal
