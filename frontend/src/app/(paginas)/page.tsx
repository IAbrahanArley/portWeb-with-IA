import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import { obterTecnologias } from "@/components/functions/tecnlogias"
import Container from "@/components/shared/Container"
export default async function Home() {
	const tecnologias = await obterTecnologias()
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-20">
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
