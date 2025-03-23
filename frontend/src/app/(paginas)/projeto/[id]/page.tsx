import { getProjeto } from "@/components/functions/projetos"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import React from "react"

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params
	const projeto = await getProjeto(id)
	return projeto ? (
		<div className="bg-black text-white">
			<Cabecalho />
			<Container className="py-7 flex flex-col gap-10">
				<h1 className="text-3xl font-bold">{projeto.nome}</h1>
				<div className="flex flex-col items-center">
					<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				</div>
			</Container>
		</div>
	) : null
}

export default PaginaProjeto
