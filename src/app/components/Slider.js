export const Slider = ({ children, className, subClassName}) => {
	return (
		<>
		<div className={`h-56 sm:h-64 xl:h-80 2xl:h-96 ${className}`}>
			<div className={`relative m-auto text-center ${subClassName}`}>
				{children}
			</div>
		</div>
		</>
	)
}
