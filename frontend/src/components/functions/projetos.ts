import { Projeto, Tipo } from "@/types"
import {
	getProjetos,
	getProjeto,
	getProjetosPorTipo,
	getProjetosDestaque,
} from "@/app/actions/projetos"

export async function getProjetosData() {
	const projetos: Projeto[] = await getProjetos()
	return {
		todos: projetos,
		get mobile() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
		},
		get web() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
		},
		get destaque() {
			return projetos.filter((projeto) => projeto.destaque === true)
		},
	}
}

export async function getProjetoData(id: string): Promise<Projeto | null> {
	return await getProjeto(id)
}

// Funções otimizadas usando Server Actions específicas
export async function getProjetosMobile(): Promise<Projeto[]> {
	return await getProjetosPorTipo(Tipo.MOBILE)
}

export async function getProjetosWeb(): Promise<Projeto[]> {
	return await getProjetosPorTipo(Tipo.WEB)
}

export async function getProjetosDestaqueData(): Promise<Projeto[]> {
	return await getProjetosDestaque()
}
