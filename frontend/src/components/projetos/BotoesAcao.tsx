import { Projeto } from "@core"
import { Github, Globe } from "lucide-react"

interface BotoesAcaoProps {
	projeto: Projeto
}

export default function BotoesAcao({ projeto }: BotoesAcaoProps) {
	return (
		<div className="flex flex-wrap gap-3 mt-6">
			{/* Botão do Repositório */}
			<a
				href={projeto.repositorio}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
			>
				<Github size={20} />
				<span>Ver Código</span>
			</a>

			{/* Botão do Deploy (só aparece se existir deployUrl) */}
			{projeto.deployUrl && (
				<a
					href={projeto.deployUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
				>
					<Globe size={20} />
					<span>Ver Projeto</span>
				</a>
			)}
		</div>
	)
}
