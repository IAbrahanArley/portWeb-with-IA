"use server"

import { prisma } from "@/lib/prisma"
import { Projeto, Tipo, Nivel } from "@core"

// Tipo específico para o projeto do Prisma
type ProjetoPrisma = {
	id: number
	nome: string
	descricao: string
	imagens: string[] | null
	nivel: number
	tipo: string
	destaque: boolean
	repositorio: string
	deployUrl: string | null
	tecnologias: {
		id: number
		nome: string
		descricao: string
		imagem: string
		destaque: boolean
	}[]
}

// Dados mock para desenvolvimento sem banco
const mockProjetos: Projeto[] = [
	{
		id: "1",
		nome: "Portfolio Web",
		descricao: "Portfolio pessoal desenvolvido com Next.js",
		imagens: ["/banner-37.png"],
		nivel: Nivel.AVANCADO,
		tipo: Tipo.WEB,
		destaque: true,
		repositorio: "https://github.com/user/portfolio",
		deployUrl: "https://portfolio-exemplo.vercel.app",
		tecnologias: [],
	},
	{
		id: "2",
		nome: "Projeto Mobile",
		descricao: "Aplicativo mobile desenvolvido com React Native",
		imagens: ["/banner-37.png"],
		nivel: Nivel.INTERMEDIARIO,
		tipo: Tipo.MOBILE,
		destaque: false,
		repositorio: "https://github.com/user/mobile-app",
		deployUrl: undefined,
		tecnologias: [],
	},
]

export async function getProjetos(): Promise<Projeto[]> {
	try {
		const projetos = await prisma.projeto.findMany({ include: { tecnologias: true } })
		console.log("✅ Banco conectado, projetos encontrados:", projetos.length)

		const projetosMapeados = projetos.map((projeto: ProjetoPrisma) => ({
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as Nivel,
			tipo: projeto.tipo as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias,
		}))

		return projetosMapeados
	} catch (error) {
		console.warn("⚠️ Usando dados mock - banco não disponível:", error)
		return mockProjetos
	}
}

export async function getProjeto(id: string): Promise<Projeto | null> {
	try {
		const projeto = await prisma.projeto.findUnique({
			where: { id: parseInt(id) },
			include: { tecnologias: true },
		})

		if (!projeto) {
			console.log("❌ Projeto não encontrado para ID:", id)
			return null
		}

		const projetoMapeado = {
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as Nivel,
			tipo: projeto.tipo as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias,
		}

		return projetoMapeado
	} catch (error) {
		console.warn("⚠️ Erro ao buscar projeto, usando mock:", error)
		const mockProjeto = mockProjetos.find((p) => p.id === id)
		return mockProjeto || null
	}
}

export async function getProjetosPorTipo(tipo: Tipo): Promise<Projeto[]> {
	try {
		const projetos = await prisma.projeto.findMany({
			where: { tipo: tipo },
			include: { tecnologias: true },
		})

		const projetosMapeados = projetos.map((projeto: ProjetoPrisma) => ({
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as Nivel,
			tipo: projeto.tipo as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias,
		}))

		return projetosMapeados
	} catch (error) {
		console.warn("⚠️ Erro ao buscar projetos por tipo, usando mock:", error)
		const mockProjetosFiltrados = mockProjetos.filter((p) => p.tipo === tipo)
		return mockProjetosFiltrados
	}
}

export async function getProjetosDestaque(): Promise<Projeto[]> {
	try {
		const projetos = await prisma.projeto.findMany({
			where: { destaque: true },
			include: { tecnologias: true },
		})

		const projetosMapeados = projetos.map((projeto: ProjetoPrisma) => ({
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as Nivel,
			tipo: projeto.tipo as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias,
		}))

		return projetosMapeados
	} catch (error) {
		console.warn("⚠️ Erro ao buscar projetos em destaque, usando mock:", error)
		const mockProjetosDestaque = mockProjetos.filter((p) => p.destaque)
		return mockProjetosDestaque
	}
}
