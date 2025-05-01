import React from 'react'
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const DesktopFooter = () => {
	return (
				<Footer container className='bg-secondaryBackground text-secondaryForeground rounded-none w-full'>
				<FooterCopyright href="#" by="BabyKangaroo" year={2025} />
				<FooterLinkGroup>
					<FooterLink href="#">About</FooterLink>
					<FooterLink href="#">Privacy Policy</FooterLink>
					<FooterLink href="#">Licensing</FooterLink>
					<FooterLink href="#">Contact</FooterLink>
				</FooterLinkGroup>
				<FooterLinkGroup>
					<FooterLink href="#">About</FooterLink>
					<FooterLink href="#">Privacy Policy</FooterLink>
					<FooterLink href="#">Licensing</FooterLink>
					<FooterLink href="#">Contact</FooterLink>
				</FooterLinkGroup>
				
			</Footer>
	)
}

export default DesktopFooter