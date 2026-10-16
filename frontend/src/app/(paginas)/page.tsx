import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Container from "@/components/shared/Container"
import Projetos from "@/components/projetos/Projetos"
import Contato from "@/components/shared/Contato"
import FonteDados from "@/components/shared/FonteDados"
import { carregarPortfolio } from "@/lib/portfolio"

export const dynamic = "force-dynamic"

export default async function Home() {
	const dados = await carregarPortfolio()
	const selecionados = ["10", "5", "1", "6", "7", "4"].flatMap((id) => dados.projetos.filter((projeto) => projeto.id === id))
	return <>
		<Principal />
		<main id="conteudo">
			<Container className="work-container"><Projetos lista={selecionados} titulo="Trabalho selecionado." /><FonteDados data={dados.atualizadoEm} /></Container>
			<Curriculo />
			<Contato />
		</main>
	</>
}
