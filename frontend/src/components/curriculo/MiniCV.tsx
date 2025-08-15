import Image from "next/image"
import React from "react"

const MiniCV = () => {
	return (
		<div className="flex md:flex-row gap-6 flex-col-reverse flex-1 items-center lg:flex-col-reverse lg:items-center md:items-center xl:items-start border xl:flex-row border-[#E4DAED] px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/abrahan.png" alt="foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start xl:items-start lg:items-center">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-blue-600  via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						{" "}
						Abrahan Arley{" "}
					</span>
					<span> Desenvolvedor Web </span>
				</div>
				<p className="text-sm lg:text-center xl:text-left text-center md:text-left">
					Graduado em sistemas para internet pela Uniesp de Joao Pessoa.
					<br /> Pós graaduando em engenharia de software pela Uninssau.
					<br /> Desenvolvedor Full Stack com experiência em frontend e backend.
				</p>
			</div>
		</div>
	)
}

export default MiniCV
