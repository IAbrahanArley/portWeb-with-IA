import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
	tecnologias: Tecnologia[]
}

const tecnologias = (props: TecnologiasProps) => {
	return props.tecnologias ? (
		<div className="flex justify-center gap-4 flex-wrap">
			{props.tecnologias.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col  items-center gap-1">
					<span className="flex justify-center h-11 w-11 sm:h-16 sm:w-16 items-center rounded-xl overflow-hidden">
						<Image
							src={tecnologia.imagem}
							alt={tecnologia.nome}
							width={50}
							height={50}
							className="object-contain "
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
				</div>
			))}
		</div>
	) : null
}

export default tecnologias
