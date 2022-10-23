function Button(props) {
	const btnPrimary =
		"relative bg-slate-700 text-slate-100 hover:bg-slate-600 active:top-px"
	const btnSecondary =
		"relative bg-transparent border border-slate-300 hover:bg-slate-300 active:top-px"
	const btnMd = "py-1 px-3"
	const btnLg = "py-3 px-3"
	return (
		<button
			type={props.type}
			kind={props.kind}
			className={props.className + 
				`
					${
						props.kind === "primary"
						? btnPrimary
						: props.kind === "secondary"
						? btnSecondary
						: btnPrimary
					}
					${
						props.size === "lg"
						? btnLg
						: props.size === "md"
						? btnMd
						: btnMd
					}
				`
			}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
