import { Carousel01 } from '../carousels/Carousel01'

export const DealsOfTheDay = () => {
	return (
		<>
		<div className=" flex flex-col items-center">
			<div className="w-full text-left">
				<h2 className="">Пропозиції дня</h2>
			</div>
			<Carousel01 categories={[ 
					"inshi-kategoriyi", 
					"lizhko-kimnata", 
					"dytyachi-mebli",
				]} order="random" />
		</div>
		</>
	)
}
