export const FallbackProductCard = () => {
	return (
			<div className="flex flex-col p-2 bg-gray-50/50 border rounded-lg text flex-grow h-full animate-pulse">
					<div className="flex justify-center">
							<div className="bg-gray-300 w-[187px] h-[187px] rounded-md"></div>
					</div>
					<div className="mt-2 px-4 flex flex-col flex-grow">
							<p>
									<span className="bg-gray-300 h-6 w-20 rounded inline-block"></span>
									<span className="bg-gray-200 h-4 w-14 rounded inline-block ml-2"></span>
							</p>
							<h3 className="mt-2 bg-gray-300 h-5 w-full rounded flex-grow"></h3>
					</div>
			</div>
	);
};
