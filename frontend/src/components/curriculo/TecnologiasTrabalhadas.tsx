import { Tecnologia } from "@/types"
export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function Curriculo(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 border border-[#E4DAED] ">
			<div className=" flex justify-center gap-x-3 flex-wrap">
				<ul className="grid grid-cols-2 gap-x-6 list-disc pl-5">
					{props.tecnologias.map((tecnologia) => (
						<li key={tecnologia.id} className="text-white text-sm marker:text-blue-600">
							{tecnologia.nome}
						</li>
					))}
				</ul>
			</div>
		</div>
	) : null
}
