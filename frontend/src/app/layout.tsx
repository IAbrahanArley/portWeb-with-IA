import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google"
export const metadata: Metadata = {
	title: "PortAbrahan",
	description: "Portfolio de projetos de desenvolvimento de software",
}

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
