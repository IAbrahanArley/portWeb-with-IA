"use server"

import { prisma } from "@/lib/prisma"
import { Tecnologia } from "@/types"

// Dados mock para desenvolvimento sem banco
const mockTecnologias: Tecnologia[] = [
	{
		id: "1",
		nome: "React",
		descricao: "Biblioteca JavaScript para interfaces",
		imagem: "/logo.png",
		destaque: true,
	},
	{
		id: "2",
		nome: "Node.js",
		descricao: "Runtime JavaScript no servidor",
		imagem: "/logo.png",
		destaque: true,
	},
]

export async function getTecnologias(): Promise<Tecnologia[]> {
	try {
		const tecnologias = await prisma.tecnologia.findMany()

		return tecnologias.map(
			(tecnologia: {
				id: number
				nome: string
				descricao: string
				imagem: string
				destaque: boolean
			}) => ({
				id: tecnologia.id.toString(),
				nome: tecnologia.nome,
				descricao: tecnologia.descricao,
				imagem: tecnologia.imagem,
				destaque: tecnologia.destaque,
			})
		)
	} catch (error) {
		console.warn("⚠️ Usando dados mock - banco não disponível:", error)
		return mockTecnologias
	}
}

export async function getTecnologiasDestaque(): Promise<Tecnologia[]> {
	try {
		const tecnologias = await prisma.tecnologia.findMany({
			where: { destaque: true },
		})

		return tecnologias.map(
			(tecnologia: {
				id: number
				nome: string
				descricao: string
				imagem: string
				destaque: boolean
			}) => ({
				id: tecnologia.id.toString(),
				nome: tecnologia.nome,
				descricao: tecnologia.descricao,
				imagem: tecnologia.imagem,
				destaque: tecnologia.destaque,
			})
		)
	} catch (error) {
		console.warn("⚠️ Erro ao buscar tecnologias em destaque, usando mock:", error)
		const mockTecnologiasDestaque = mockTecnologias.filter((t) => t.destaque)
		return mockTecnologiasDestaque
	}
}
