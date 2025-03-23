import { Tecnologia } from "@core"
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"
import Experiencia from "./Experiencia"
import MiniCV from "./MiniCV"
export interface CurriculoProps {
	tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
	return (
		<div className="flex flex-col lg:flex-row min-h-72 w-full gap-4">
			<MiniCV />
			<Experiencia />
			<TecnologiasTrabalhadas tecnologias={props.tecnologias} />
		</div>
	)
}
