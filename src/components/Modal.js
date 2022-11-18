import Notification from "./Notification"
import ReactDOM from "react-dom"

function ModalRoot(props) {
	return (
		<div className='modal flex flex-col justify-end absolute inset-0 z-10'>
			<div className='modal__content p-4 pt-12 bg-slate-50 w-full'>
				<h2 className='text-lg font-semibold mb-4'>
					{props.modalTitle}
				</h2>
				{props.error && (
					<Notification
						title={props.errorTitle}
						message={props.errorMessage}
						onDismiss={props.errorHandler}
					/>
				)}
				{props.children}
			</div>
			<div
				onClick={props.onCancel}
				className='modal__bg absolute inset-0 bg-slate-900 opacity-75 -z-10'
			></div>
		</div>
	)
}

function Modal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalRoot
					modalTitle={props.modalTitle}
					error={props.error}
					errorTitle={props.errorTitle}
					errorMessage={props.errorMessage}
					errorHandler={props.errorHandler}
					onCancel={props.onCancel}
				>
					{props.children}
				</ModalRoot>,
				document.getElementById("modal-root")
			)}
		</>
	)
}

export default Modal
