import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import { obterTecnologias } from "@/components/functions/tecnlogias"
import Container from "@/components/shared/Container"
import {
	getProjetosDestaqueData,
	getProjetosWeb,
	getProjetosMobile,
} from "@/components/functions/projetos"
import Projetos from "@/components/projetos/Projetos"

export default async function Home() {
	const [tecnologias, projetosDestaque, projetosWeb, projetosMobile] = await Promise.all([
		obterTecnologias(),
		getProjetosDestaqueData(),
		getProjetosWeb(),
		getProjetosMobile(),
	])

	return (
		<div className="bg-[url('/background.svg')] bg-opacity-10 bg-cover bg-center bg-no-repeat">
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-20 flex flex-col items-center gap-10">
				<Projetos lista={projetosDestaque} titulo="Projetos em destaque" />
				<Projetos lista={projetosWeb} titulo="Projetos Web" />
				<Projetos lista={projetosMobile} titulo="Projetos Mobile" />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
