import { cache } from "react"
import snapshot from "@/data/portfolio-snapshot.json"
import { normalizarProjeto, normalizarTecnologia, type ProjetoRegistro } from "./normalizar-projeto"

// Somente registros públicos revisados. Nunca publica exemplos fictícios.
export const carregarPortfolio = cache(async () => {
	if (process.env.DATABASE_URL) {
		try {
			const { prisma } = await import("./prisma")
			const [projetos, tecnologias] = await Promise.all([
				prisma.projeto.findMany({ include: { tecnologias: true }, orderBy: [{ destaque: "desc" }, { id: "desc" }] }),
				prisma.tecnologia.findMany({ orderBy: { nome: "asc" } }),
			])
			return { projetos: projetos.map(normalizarProjeto), tecnologias: tecnologias.map(normalizarTecnologia), fonte: "banco" as const, atualizadoEm: null }
		} catch {
			console.warn("Banco indisponível. Exibindo cópia revisada do portfólio.")
		}
	}
	return {
		projetos: (snapshot.projetos as ProjetoRegistro[]).map(normalizarProjeto)
			.sort((a, b) => Number(b.destaque) - Number(a.destaque) || Number(b.id) - Number(a.id)),
		tecnologias: snapshot.tecnologias.map(normalizarTecnologia).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")),
		fonte: "copia" as const,
		atualizadoEm: snapshot.atualizadoEm,
	}
})
