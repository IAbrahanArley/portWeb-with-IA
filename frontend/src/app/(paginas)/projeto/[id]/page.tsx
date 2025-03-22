import Cabecalho from "@/components/shared/Cabecalho"
import React from "react"

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	console.log(props)
	const { id } = await props.params
	return (
		<div>
			<Cabecalho />
			<h1>Projeto {id}</h1>
		</div>
	)
}

export default PaginaProjeto
