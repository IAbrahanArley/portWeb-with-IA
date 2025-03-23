import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import { obterTecnologias } from "@/components/functions/tecnlogias"
import Container from "@/components/shared/Container"
import { getProjetos } from "@/components/functions/projetos"
import Projetos from "@/components/projetos/Projetos"
export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await getProjetos()
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-20 flex flex-col gap-2">
				<Projetos lista={projetos.destaque} titulo="Projetos em destaque" />
				<Projetos lista={projetos.web} titulo="Projetos Web" />
				<Projetos lista={projetos.mobile} titulo="Projetos Mobile" />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
