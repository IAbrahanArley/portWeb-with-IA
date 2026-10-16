"use server"

import { carregarPortfolio } from "@/lib/portfolio"
import { Tipo } from "@/types"

export async function getProjetos() {
	return (await carregarPortfolio()).projetos
}

export async function getProjeto(id: string) {
	if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id))) return null
	return (await getProjetos()).find((projeto) => projeto.id === id) ?? null
}

export async function getProjetosPorTipo(tipo: Tipo) {
	return (await getProjetos()).filter((projeto) => projeto.tipo === tipo)
}

export async function getProjetosDestaque() {
	return (await getProjetos()).filter((projeto) => projeto.destaque)
}
