import type { Metadata } from "next"
import "./globals.css"
import { Manrope } from "next/font/google"
import { Suspense } from "react"
import MotionRoot from "@/components/motion/MotionRoot"
export const metadata: Metadata = {
	title: "Abrahan Arley | Desenvolvedor Backend",
	description: "Portfólio de Abrahan Arley: Java/Spring Boot, PHP/Laravel, APIs REST, integrações e sistemas financeiros.",
}

const fonte = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body id="topo" className={`${fonte.variable} antialiased`}>
				<a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
				{children}
				<Suspense fallback={null}><MotionRoot /></Suspense>
			</body>
		</html>
	)
}
