import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getProjetoData } from "@/components/functions/projetos"
import { carregarPortfolio } from "@/lib/portfolio"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import FonteDados from "@/components/shared/FonteDados"
import Contato from "@/components/shared/Contato"
import { obterReadme } from "@/components/functions/gitHub"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import Readme from "@/components/projetos/Readme"
import BotoesAcao from "@/components/projetos/BotoesAcao"
import ProjectCover from "@/components/projetos/ProjectCover"
import { casos } from "@/data/casos"
import { apresentacaoProjetos } from "@/data/apresentacao-projetos"

export const dynamic = "force-dynamic"
type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const projeto = await getProjetoData((await params).id)
	return { title: projeto ? `${projeto.nome} | Abrahan Arley` : "Projeto não encontrado", description: projeto?.descricao }
}

export default async function PaginaProjeto({ params }: Props) {
	const { id } = await params
	const [projeto, dados] = await Promise.all([getProjetoData(id), carregarPortfolio()])
	if (!projeto) notFound()
	const readme = await obterReadme(projeto.repositorio)
	const caso = casos[projeto.id]
	const apresentacao = apresentacaoProjetos[projeto.id]
	const imagens = apresentacao?.imagem ? [apresentacao.imagem] : projeto.imagens.filter((imagem) => !imagem.includes("storage.googleapis.com"))
	return <>
		<Cabecalho />
		<main id="conteudo">
			<Container className="detail-page">
				<Link href="/projetos" className="text-link detail-back"><ArrowLeft size={18} aria-hidden="true" /> Voltar aos projetos</Link>
				<div className="detail-intro">
					<h1 className="page-title" data-motion>{apresentacao?.titulo ?? projeto.nome}</h1>
					<p data-motion data-delay="80">{projeto.descricao}</p>
					<BotoesAcao projeto={projeto} />
				</div>
				{imagens.length ? <CarrosselImagens imagens={imagens} nome={projeto.nome} /> : <div className="project-gallery-frame" data-motion="image"><ProjectCover projeto={projeto} /></div>}
				{caso ? <section className="case-study" aria-label="Estudo do projeto">
					<p data-motion>{caso.contexto}</p>
					<div data-motion><h2>O problema</h2><p>{caso.problema}</p></div>
					<div data-motion><h2>Minha participação</h2><p>{caso.participacao}</p></div>
					<div data-motion><h2>Decisões técnicas</h2><ul>{caso.decisoes.map((decisao) => <li key={decisao}>{decisao}</li>)}</ul></div>
					<div data-motion><h2>Entrega</h2><p>{caso.entrega}</p></div>
				</section> : null}
				{projeto.tecnologias.length ? <section aria-label="Tecnologias do projeto" className="detail-technologies" data-motion><h2>Tecnologias</h2><Tecnologias tecnologias={projeto.tecnologias} /></section> : null}
				{readme ? <section className="detail-readme" data-motion><h2>Dentro do projeto.</h2><Readme conteudo={readme.conteudo} baseUrl={readme.baseUrl} repoUrl={readme.repoUrl} /></section> : projeto.repositorio ? <p className="page-intro">A documentação não pôde ser carregada. Use “Ver código” para consultar o repositório.</p> : null}
				<FonteDados data={dados.atualizadoEm} />
			</Container>
			<Contato />
		</main>
	</>
}
