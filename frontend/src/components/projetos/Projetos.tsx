import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"

export interface ProjetosProps {
	titulo: string
	lista: Projeto[]
}

export default function Projetos({ lista, titulo }: ProjetosProps) {
	return (
		<div className="flex flex-wrap gap-4">
			<h1 className="w-full text-2xl font-bold text-white/70">{titulo}</h1>
			{lista.map((projeto) => (
				<ItemProjeto key={projeto.id} projeto={projeto} />
			))}
		</div>
	)
}
