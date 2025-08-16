import React from "react"
import Container from "./Container"
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

const Cabecalho = () => {
	return (
		<header className=" flex items-center h-16 text-[#4C1B8A] w-full z-50 bg-black/90">
			<Container className="flex-1 sm:bg-[#4C1B8A] rounded-full mt-10 flex justify-center md:justify-between items-center">
				<div className="flex gap-10 items-center w-full">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo2.png" alt="Logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://www.linkedin.com/in/abrahan-arley/"
						className="hidden sm:block bg-[#E4DAED] rounded-full px-5 py-1 text-sm font-bold"
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
