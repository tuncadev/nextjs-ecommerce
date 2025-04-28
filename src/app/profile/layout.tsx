import React from 'react'
import SideBar from '@/app/components/profile/SideBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
	<div className="flex flex-row justify-between">
		<SideBar />
		<div className="pl-4 w-full ">{children}</div>
	</div>
	)
}

 