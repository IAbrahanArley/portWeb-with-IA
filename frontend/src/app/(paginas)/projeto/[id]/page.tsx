import { getProjetoData } from "@/components/functions/projetos"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import { obterReadme } from "@/components/functions/gitHub"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import Readme from "@/components/projetos/Readme"
import BotoesAcao from "@/components/projetos/BotoesAcao"

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params
	const projeto = await getProjetoData(id)

	if (!projeto) {
		return null
	}

	const readme = await obterReadme(projeto.repositorio)

	// Validação para garantir que há imagens válidas para o carrossel
	const imagensCarrossel =
		projeto.imagens && projeto.imagens.length > 1 ? projeto.imagens.slice(1) : []

	return (
		<div>
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<div className="w-full max-w-4xl">
					<h1 className="text-3xl font-bold self-start mb-4">{projeto.nome}</h1>
					<p className="text-gray-300 mb-6 leading-relaxed">{projeto.descricao}</p>

					{/* Botões de Ação */}
					<BotoesAcao projeto={projeto} />
				</div>

				{/* Só renderiza o carrossel se houver imagens adicionais */}
				{imagensCarrossel.length > 0 && <CarrosselImagens imagens={imagensCarrossel} />}

				<Tecnologias tamanhoMenor tecnologias={projeto.tecnologias} />
				<Readme conteudo={readme} />
			</Container>
		</div>
	)
}

export default PaginaProjeto
