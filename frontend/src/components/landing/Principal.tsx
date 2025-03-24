import Cabecalho from "../shared/Cabecalho"
import { Tecnologia } from "@core"
import Tecnologias from "../tecnologias/Tecnologias"
export interface PrincipalProps {
	tecnologias: Tecnologia[]
}
export default function Principal(props: PrincipalProps) {
	return (
		<div className=" flex flex-col h-[500px] bg-[url('/banner-37.png')] bg-cover bg-center">
			<Cabecalho />
			<div className="flex w-full flex-col items-center gap-10 justify-center flex-1">
				<div className="flex flex-col text-center items-center">
					<h1 className="sm:text-5xl text-3xl font-bold">Abrahan Arley</h1>
					<h2 className="text-xl mt-4 text-zinc-500">Desenvolvedor FullStack </h2>
				</div>
				<Tecnologias tecnologias={props.tecnologias} />
			</div>
		</div>
	)
}
