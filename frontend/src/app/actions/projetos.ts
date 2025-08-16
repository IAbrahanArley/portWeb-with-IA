"use server"

import { prisma } from "@/lib/prisma"
import { Projeto, Tipo, Nivel } from "@/types"

// Tipos específicos para o Prisma
type TecnologiaPrisma = {
	id: number
	nome: string
	descricao: string
	imagem: string
	destaque: boolean
}

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
	tecnologias: TecnologiaPrisma[]
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
		tecnologias: [],
	},
]

export async function getProjetos(): Promise<Projeto[]> {
	try {
		console.log("🔍 Tentando conectar ao banco...")
		const projetos = await prisma.projeto.findMany({ include: { tecnologias: true } })
		console.log("✅ Banco conectado, projetos encontrados:", projetos.length)
		console.log("📋 Projetos:", projetos.map((p: ProjetoPrisma) => ({ id: p.id, nome: p.nome, tipo: p.tipo })))

		const projetosMapeados = projetos.map((projeto: ProjetoPrisma) => ({
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as unknown as Nivel,
			tipo: projeto.tipo as unknown as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias.map((tech: TecnologiaPrisma) => ({
				id: tech.id.toString(),
				nome: tech.nome,
				descricao: tech.descricao,
				imagem: tech.imagem,
				destaque: tech.destaque,
			})),
		}))

		console.log("🔄 Projetos mapeados:", projetosMapeados.map((p: Projeto) => ({ id: p.id, nome: p.nome, tipo: p.tipo })))
		return projetosMapeados
	} catch (error) {
		console.warn("⚠️ Usando dados mock - banco não disponível:", error)
		console.log("🎭 Retornando projetos mock:", mockProjetos.map(p => ({ id: p.id, nome: p.nome, tipo: p.tipo })))
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
			nivel: projeto.nivel as unknown as Nivel,
			tipo: projeto.tipo as unknown as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias.map((tech: TecnologiaPrisma) => ({
				id: tech.id.toString(),
				nome: tech.nome,
				descricao: tech.descricao,
				imagem: tech.imagem,
				destaque: tech.destaque,
			})),
		}

		return projetoMapeado
	} catch (error) {
		console.warn("⚠️ Erro ao buscar projeto, usando mock:", error)
		const mockProjeto = mockProjetos.find((p) => p.id === id)
		return mockProjeto || null
	}
}

// Função para converter enum Tipo para string do banco
function tipoParaBanco(tipo: Tipo): string {
	switch (tipo) {
		case Tipo.WEB:
			return "web"
		case Tipo.MOBILE:
			return "mobile"
		case Tipo.DESKTOP:
			return "desktop"
		case Tipo.API:
			return "api"
		case Tipo.BOT:
			return "bot"
		case Tipo.OUTRO:
			return "outro"
	}
}

export async function getProjetosPorTipo(tipo: Tipo): Promise<Projeto[]> {
	try {
		const tipoBanco = tipoParaBanco(tipo)
		console.log("🔍 Buscando projetos por tipo:", tipo, "-> banco:", tipoBanco)
		const projetos = await prisma.projeto.findMany({
			where: { tipo: tipoBanco },
			include: { tecnologias: true },
		})

		console.log("📋 Projetos encontrados para tipo", tipo, ":", projetos.map((p: ProjetoPrisma) => ({ id: p.id, nome: p.nome, tipo: p.tipo })))

		const projetosMapeados = projetos.map((projeto: ProjetoPrisma) => ({
			id: projeto.id.toString(),
			nome: projeto.nome,
			descricao: projeto.descricao,
			imagens: projeto.imagens || [], // SEM fallback para logo
			nivel: projeto.nivel as unknown as Nivel,
			tipo: projeto.tipo as unknown as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias.map((tech: TecnologiaPrisma) => ({
				id: tech.id.toString(),
				nome: tech.nome,
				descricao: tech.descricao,
				imagem: tech.imagem,
				destaque: tech.destaque,
			})),
		}))

		console.log("🔄 Projetos mapeados para tipo", tipo, ":", projetosMapeados.map((p: Projeto) => ({ id: p.id, nome: p.nome, tipo: p.tipo })))
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
			nivel: projeto.nivel as unknown as Nivel,
			tipo: projeto.tipo as unknown as Tipo,
			destaque: projeto.destaque,
			repositorio: projeto.repositorio,
			deployUrl: projeto.deployUrl || undefined, // Convertendo null para undefined
			tecnologias: projeto.tecnologias.map((tech: TecnologiaPrisma) => ({
				id: tech.id.toString(),
				nome: tech.nome,
				descricao: tech.descricao,
				imagem: tech.imagem,
				destaque: tech.destaque,
			})),
		}))

		return projetosMapeados
	} catch (error) {
		console.warn("⚠️ Erro ao buscar projetos em destaque, usando mock:", error)
		const mockProjetosDestaque = mockProjetos.filter((p) => p.destaque)
		return mockProjetosDestaque
	}
}
