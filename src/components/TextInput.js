function TextInput(props) {
	return (
		<div className='flex items-baseline grid grid-cols-3 mb-2'>
			<label className='col-span-1'>{props.label}</label>
			<input
				type={props.type}
				className='col-span-2 border border-b-2 border-slate-300 p-1'
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
				ref={props.ref}
			/>
		</div>
	)
}

export default TextInput
