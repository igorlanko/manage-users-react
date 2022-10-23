import Button from "./Button"

function Notification(props) {
	return (
		<div className='p-2 mb-6 bg-red-200 border border-red-400'>
			<h3 className='font-bold'>
				{props.title || "Something went wrong!"}
			</h3>
			<p>
				{props.message || "You need to fix the error first to proceed."}
			</p>
			<Button
				onClick={props.onDismiss}
				className='mt-4'
			>
				{props.onDismissLabel || "Got it"}
			</Button>
		</div>
	)
}

export default Notification
