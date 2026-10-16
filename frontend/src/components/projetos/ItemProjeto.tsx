import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Projeto } from "@/types"
import { apresentacaoProjetos } from "@/data/apresentacao-projetos"
import ProjectCover from "./ProjectCover"

export default function ItemProjeto({ projeto }: { projeto: Projeto }) {
	const apresentacao = apresentacaoProjetos[projeto.id]
	return <article className="project-item">
		<Link href={`/projeto/${projeto.id}`} className="project-link">
			<div className="project-visual"><ProjectCover projeto={projeto} /><span className="project-open" aria-hidden="true"><ArrowUpRight size={25} /></span></div>
			<div className="project-caption">
				<div><p className="project-category">{apresentacao?.categoria ?? "Projeto de software"}</p><h3>{apresentacao?.titulo ?? projeto.nome}</h3></div>
				<ArrowUpRight size={24} className="project-caption-arrow" aria-hidden="true" />
			</div>
			<p className="project-description">{apresentacao?.resumo ?? projeto.descricao}</p>
		</Link>
		<p className="project-stack">{projeto.tecnologias.slice(0, 4).map((tech) => tech.nome).join(" / ")}</p>
	</article>
}
