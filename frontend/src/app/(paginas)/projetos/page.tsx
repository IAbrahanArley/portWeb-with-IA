import type { Metadata } from "next"
import Link from "next/link"
import { carregarPortfolio } from "@/lib/portfolio"
import Cabecalho from "@/components/shared/Cabecalho"
import Container from "@/components/shared/Container"
import FonteDados from "@/components/shared/FonteDados"
import Projetos from "@/components/projetos/Projetos"
import Contato from "@/components/shared/Contato"
import { Tipo } from "@/types"

export const metadata: Metadata = { title: "Projetos | Abrahan Arley", description: "Projetos de backend, aplicações web, mobile e jogos de Abrahan Arley." }
export const dynamic = "force-dynamic"

const filtros = [{ valor: "todos", label: "Todos" }, { valor: Tipo.WEB, label: "Web" }, { valor: Tipo.API, label: "Backend / APIs" }, { valor: Tipo.MOBILE, label: "Mobile" }, { valor: Tipo.JOGO, label: "Jogos" }]

export default async function Catalogo({ searchParams }: { searchParams: Promise<{ tipo?: string | string[] }> }) {
	const [dados, parametros] = await Promise.all([carregarPortfolio(), searchParams])
	const tipo = filtros.some((filtro) => filtro.valor === parametros.tipo) ? parametros.tipo : "todos"
	const projetos = dados.projetos.filter((projeto) => tipo === "todos" || projeto.tipo === tipo)
	return <>
		<Cabecalho />
		<main id="conteudo">
			<Container className="catalog-page">
				<h1 className="page-title" data-motion>Projetos.</h1>
				<p className="page-intro" data-motion data-delay="80">Diferentes desafios. O mesmo cuidado com a construção.</p>
				<nav aria-label="Filtrar projetos" className="project-filters" data-motion data-delay="140">
					{filtros.map((filtro) => <Link key={filtro.valor} href={filtro.valor === "todos" ? "/projetos" : `/projetos?tipo=${filtro.valor}`} aria-current={tipo === filtro.valor ? "page" : undefined}>{filtro.label}</Link>)}
				</nav>
				<p aria-live="polite" className="catalog-count">{projetos.length} {projetos.length === 1 ? "projeto encontrado" : "projetos encontrados"}</p>
				<Projetos lista={projetos} titulo="Explore os projetos" catalogo />
				<FonteDados data={dados.atualizadoEm} />
			</Container>
			<Contato />
		</main>
	</>
}
