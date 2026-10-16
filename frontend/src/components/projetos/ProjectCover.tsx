import { Projeto } from "@/types"
import { apresentacaoProjetos } from "@/data/apresentacao-projetos"
import SimpleImage from "../shared/SimpleImage"

export default function ProjectCover({ projeto }: { projeto: Projeto }) {
	const apresentacao = apresentacaoProjetos[projeto.id]
	if (apresentacao?.imagem) return <SimpleImage src={apresentacao.imagem} alt={`Capa de ${projeto.nome}`} fill sizes="(max-width: 768px) 90vw, 800px" className="project-cover-image" />
	if (projeto.id === "10") return <div className="project-architecture" data-ui>
		<p>Spring Boot + Angular</p>
		<div className="architecture-title">Pessoas.<br />Oportunidades.</div>
		<div className="architecture-flow"><span>Candidaturas</span><span aria-hidden="true">↔</span><span>API Java</span><span aria-hidden="true">↔</span><span>PostgreSQL</span></div>
		<p className="architecture-caption">Visão de arquitetura do projeto</p>
	</div>
	if (projeto.id === "5") return <div className="project-commerce" data-ui>
		<p>Java / Spring Boot / React</p>
		<div className="commerce-title">Queridas<br />Compras<span aria-hidden="true">↗</span></div>
		<p>Software para o comércio local.</p>
	</div>
	return <div className="project-type-cover" data-ui><span>{apresentacao?.categoria ?? "Projeto de software"}</span><p>{apresentacao?.titulo ?? projeto.nome}</p><span>{projeto.tecnologias.slice(0, 3).map((tech) => tech.nome).join(" · ") || "Explore o contexto e a implementação"}</span></div>
}
