import React from 'react';

interface WorkingProps {
  text?: string ;
}

const Working: React.FC<WorkingProps> = ({ text = "Обробка даних..." }) => {
  return (
		<div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
			<div className=" fixed inset-0  flex justify-center items-center">
				<div className="loader"></div>
			</div>

			<div className="fixed pt-20 inset-0 flex justify-center items-center  ">
				<div className="text-center text-gray-200 text-xs max-w-[120px]">
					{text}
				</div>
			</div>
		</div>


		
  );
};

export default Working;
