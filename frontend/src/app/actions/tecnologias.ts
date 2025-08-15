"use server"

import { prisma } from "@/lib/prisma"
import { Tecnologia } from "@core"

// Dados mock para desenvolvimento sem banco
const mockTecnologias: Tecnologia[] = [
	{
		id: 1,
		nome: "Next.js",
		descricao: "Framework React para produção",
		imagem: "/logo.png",
		destaque: true,
	},
	{
		id: 2,
		nome: "TypeScript",
		descricao: "Superset do JavaScript com tipagem",
		imagem: "/logo2.png",
		destaque: true,
	},
]

export async function getTecnologias(): Promise<Tecnologia[]> {
	try {
		const tecnologias = await prisma.tecnologia.findMany()

		return tecnologias.map((tecnologia: any) => ({
			id: tecnologia.id,
			nome: tecnologia.nome,
			descricao: tecnologia.descricao,
			imagem: tecnologia.imagem,
			destaque: tecnologia.destaque,
		}))
	} catch (error) {
		console.warn("Usando dados mock - banco não disponível:", error)
		// Retorna dados mock se o banco não estiver disponível
		return mockTecnologias
	}
}

export async function getTecnologiasDestaque(): Promise<Tecnologia[]> {
	try {
		const tecnologias = await prisma.tecnologia.findMany({
			where: { destaque: true },
		})

		return tecnologias.map((tecnologia: any) => ({
			id: tecnologia.id,
			nome: tecnologia.nome,
			descricao: tecnologia.descricao,
			imagem: tecnologia.imagem,
			destaque: tecnologia.destaque,
		}))
	} catch (error) {
		console.warn("Usando dados mock - banco não disponível:", error)
		// Retorna dados mock se o banco não estiver disponível
		return mockTecnologias.filter((t) => t.destaque)
	}
}
