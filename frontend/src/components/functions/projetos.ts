import { Projeto, Tipo } from "@core"
import { httpGet } from "./api"

export async function getProjetos() {
	const projetos: Projeto[] = await httpGet("/projetos")
	return {
		todos: projetos,
		get mobile() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
		},
		get web() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
		},
		get jogos() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.JOGO)
		},
		get destaque() {
			return projetos.filter((projeto) => projeto.destaque === true)
		},
	}
}
export async function getProjeto(id: string): Promise<Projeto | null> {
	return await httpGet(`/projetos/${id}`)
}
