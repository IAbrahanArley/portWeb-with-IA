import { Projeto } from "@/types"
import { Github, ArrowUpRight } from "lucide-react"
import { normalizarUrl, repositorioGitHub } from "@/lib/normalizar-projeto"

export default function BotoesAcao({ projeto }: { projeto: Projeto }) {
	const codigo = repositorioGitHub(projeto.repositorio)
	const demonstracao = normalizarUrl(projeto.deployUrl)
	return <div className="project-actions" data-motion data-delay="140">
		{codigo ? <a href={codigo} target="_blank" rel="noopener noreferrer" className="button-primary"><Github size={18} aria-hidden="true" />Ver código</a> : <p>Código não disponibilizado.</p>}
		{demonstracao ? <a href={demonstracao} target="_blank" rel="noopener noreferrer" className="text-link">Abrir site do projeto <ArrowUpRight size={18} aria-hidden="true" /></a> : null}
	</div>
}
