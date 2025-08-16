import { Tecnologia } from "@/types"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"
export interface PrincipalProps {
	tecnologias: Tecnologia[]
}
export default function Principal(props: PrincipalProps) {
	return (
		<div className=" flex flex-col justify-center items-center h-[500px] ">
			<Cabecalho />
			<div className="flex  flex-col items-center gap-10 justify-center flex-1 rounded-none bg-black/90 w-full h-[500px] ">
				<div className="flex flex-col text-center items-center ">
					<h1 className="sm:text-5xl text-3xl font-bold  bg-gradient-to-r from-purple-300 to-blue-900 bg-clip-text text-transparent">
						Abrahan Arley
					</h1>
					<h2 className="text-xl mt-4 text-zinc-500">Desenvolvedor FullStack </h2>
				</div>
				<Tecnologias tecnologias={props.tecnologias} />
			</div>
		</div>
	)
}
