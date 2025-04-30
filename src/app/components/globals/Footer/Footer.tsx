import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

 

type FooterPropTypes = {
	
}

export const Footer  = ({  }: FooterPropTypes) => { 

	return (
		<footer>
		<div className="md:hidden">
			<MobileFooter />
		</div>
		<div className="hidden md:block">
			<DesktopFooter />
		</div>
	</footer>
	);

}