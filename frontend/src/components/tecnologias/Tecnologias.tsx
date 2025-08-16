import { Tecnologia } from "@/types"
import SimpleImage from "@/components/shared/SimpleImage"

export interface TecnologiasProps {
	tecnologias: Tecnologia[]
	tamanhoMenor?: boolean
}

const Tecnologias = (props: TecnologiasProps) => {
	return props.tecnologias ? (
		<div className="flex justify-center gap-4 flex-wrap">
			{props.tecnologias.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col  items-center gap-1">
					<span
						className={`${
							props.tamanhoMenor ? "w-11 h-11" : "w-16 h-16"
						} rounded-full flex items-center justify-center`}
					>
						<SimpleImage
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

export default Tecnologias
