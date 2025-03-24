import { getProjeto } from "@/components/functions/projetos"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import { obterReadme } from "@/components/functions/gitHub"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import Readme from "@/components/projetos/Readme"
const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params
	const projeto = await getProjeto(id)

	if (!projeto) {
		return null
	}
	const readme = await obterReadme(projeto.repositorio)
	return projeto ? (
		<div className=" ">
			<Cabecalho />
			<Container className="py-7 flex w-full flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias tamanhoMenor tecnologias={projeto.tecnologias} />
				<Readme conteudo={readme} />
			</Container>
		</div>
	) : null
}

export default PaginaProjeto
