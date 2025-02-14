export const Loading = ({text}) => {
	return (
		<>	
			<div className="flex justify-center items-center mt-4">
				<div className="w-10 h-10 border-4 border-gray-300 border-t-sky-500 rounded-full animate-spin"></div>
				<p className="ml-2 text-gray-600">Loading {text}...</p>
			</div>
		</>
	)
}
