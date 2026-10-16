import { Tipo } from "../types/Tipo.ts"
import { Nivel } from "../types/Nivel.ts"
import type Projeto from "../types/Projeto"

export interface TecnologiaRegistro {
	id: number
	nome: string
	descricao: string
	imagem: string
	destaque: boolean
}

export interface ProjetoRegistro {
	id: number
	nome: string
	descricao: string
	imagens: string[] | null
	nivel: number
	tipo: string
	destaque: boolean
	repositorio: string
	deployUrl: string | null
	tecnologias: TecnologiaRegistro[]
}

export function normalizarUrl(valor?: string | null): string | undefined {
	if (!valor) return undefined
	try {
		const url = new URL(valor.trim().replace(/^["']+|["']+$/g, ""))
		if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return undefined
		return url.href
	} catch {
		return undefined
	}
}

export function repositorioGitHub(valor?: string | null): string | undefined {
	const endereco = normalizarUrl(valor)
	if (!endereco) return undefined
	const url = new URL(endereco)
	if (url.hostname !== "github.com" || url.protocol !== "https:") return undefined
	const partes = url.pathname.replace(/\/$/, "").split("/").filter(Boolean)
	if (partes.length !== 2 || partes.some((parte) => !/^[\w.-]+$/.test(parte))) return undefined
	return `https://github.com/${partes[0]}/${partes[1].replace(/\.git$/, "")}`
}

export function normalizarTipo(valor: string): Tipo {
	const tipo = valor.trim().toUpperCase()
	if (tipo === "JOGO" || tipo === "JOGOS") return Tipo.JOGO
	return Object.values(Tipo).find((item) => item === tipo) ?? Tipo.OUTRO
}

export function normalizarTecnologia(tecnologia: TecnologiaRegistro) {
	return { ...tecnologia, id: String(tecnologia.id) }
}

export function normalizarProjeto(projeto: ProjetoRegistro): Projeto {
	return {
		...projeto,
		id: String(projeto.id),
		tipo: normalizarTipo(projeto.tipo),
		nivel: projeto.nivel <= 1 ? Nivel.INICIANTE : projeto.nivel === 2 ? Nivel.INTERMEDIARIO : Nivel.AVANCADO,
		imagens: (projeto.imagens ?? []).filter((url) => Boolean(normalizarUrl(url)) || /^\/(?!\/)/.test(url)),
		repositorio: repositorioGitHub(projeto.repositorio) ?? "",
		deployUrl: normalizarUrl(projeto.deployUrl),
		tecnologias: projeto.tecnologias.map(normalizarTecnologia),
	}
}
