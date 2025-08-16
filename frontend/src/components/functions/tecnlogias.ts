import { Tecnologia } from "@/types"
import { getTecnologias, getTecnologiasDestaque } from "@/app/actions/tecnologias"

export async function obterTecnologias() {
	const tecnologias: Tecnologia[] = await getTecnologias()
	return {
		todas: tecnologias,
		get destaques() {
			return tecnologias.filter((tecnologia) => tecnologia.destaque)
		},
	}
}

// Função otimizada usando Server Action específica
export async function obterTecnologiasDestaque(): Promise<Tecnologia[]> {
	return await getTecnologiasDestaque()
}
