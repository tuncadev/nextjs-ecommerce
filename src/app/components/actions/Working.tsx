import React from 'react';

interface WorkingProps {
  text?: string ;
}

const Working: React.FC<WorkingProps> = ({ text = "Обробка даних..." }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="flex justify-center items-center mt-4">
          <div className="w-32 h-32 border-4 border-gray-300 border-t-sky-500 rounded-full animate-spin"></div>
        </div>
      </div>
			<div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-70 z-50 flex-wrap"> 
				<div className="flex justify-center items-center mt-4 flex-wrap">
					<div className="flex max-w-[120px] justify-center items-center m-auto text-center text-gray-200 text-xs flex-wrap">
						{text}
					</div>
				</div>
			</div>
    </>
  );
};

export default Working;
