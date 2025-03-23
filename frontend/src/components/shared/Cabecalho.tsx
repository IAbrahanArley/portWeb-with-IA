import React from "react"
import Container from "./Container"
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

const Cabecalho = () => {
	return (
		<header className=" flex items-center h-16 text-white">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex gap-10 items-center">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo2.png" alt="Logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="/sobre"
						className="hidden sm:block bg-amber-200 rounded-full px-5 py-1 text-sm font-bold"
						target="_blank"
					>
						LinkedIN
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Cabecalho
