import { Tecnologia } from "@core"
export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function Curriculo(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full bg-black lg:w-72 border border-zinc-800">
			<div className=" flex justify-center gap-x-3 flex-wrap">
				{props.tecnologias.map((tecnologia) => (
					<div key={tecnologia.id} className="flex items-center justify-center">
						<p className="text-red-500 font-bold">#</p>
						<p>{tecnologia.nome}</p>
					</div>
				))}
			</div>
		</div>
	) : null
}
