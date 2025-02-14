export const FallbackCategoryCard = () => {
    return (
        <div className="flex border border-gray-300 rounded w-[370px] gap-6 px-2 items-center animate-pulse bg-gray-100 py-4">
            <div className="flex items-center max-w-28 overflow-hidden h-full rounded-lg">
                <div className="bg-gray-300 w-24 h-16 rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-gray-300 h-5 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-3 w-1/2 rounded"></div>
            </div>
        </div>
    );
};
