import React from "react"

const Experiencia = () => {
	return (
		<div className="flex flex-col md:flex-row lg:flex-col gap-6 items-center justify-around  border p-6 border-[#E4DAED] ">
			<Item principal="+1" label="Ano de experiência" />
			<Item principal="80%" label="Cobertura em testes" />
			<Item principal="Especialista" label="Em soluções escalavéis" />
		</div>
	)
}

export default Experiencia

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-blue-600 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-200 text-sm text-center mt-2     ">{props.label}</span>
		</div>
	)
}
