import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { normalizarProjeto, normalizarTipo, normalizarUrl, repositorioGitHub } from "../src/lib/normalizar-projeto.ts"
import { obterReadme } from "../src/components/functions/gitHub.ts"

test("URLs de demonstração são limpas e protocolos perigosos são rejeitados", () => {
	assert.equal(normalizarUrl(' "https://pede-rapido-ai.vercel.app/" '), "https://pede-rapido-ai.vercel.app/")
	for (const url of ["javascript:alert(1)", "data:text/html,test", "https://user:secret@example.com", "endereco-invalido"]) {
		assert.equal(normalizarUrl(url), undefined)
	}
})

test("link comercial não se transforma em link de código", () => {
	assert.equal(repositorioGitHub("https://www.queridascompras.com.br"), undefined)
	assert.equal(repositorioGitHub("https://github.com.attacker.test/user/repo"), undefined)
	assert.equal(repositorioGitHub("https://github.com/IAbrahanArley/project-rh.git"), "https://github.com/IAbrahanArley/project-rh")
})

test("categorias reais do banco ficam acessíveis no catálogo", () => {
	assert.equal(normalizarTipo("web"), "WEB")
	assert.equal(normalizarTipo("api"), "API")
	assert.equal(normalizarTipo("jogos"), "JOGO")
	assert.equal(normalizarTipo("categoria-desconhecida"), "OUTRO")
})

test("cópia revisada usa projetos reais, sem duplicatas nem vínculos inválidos", () => {
	const dados = JSON.parse(readFileSync(new URL("../src/data/portfolio-snapshot.json", import.meta.url), "utf8"))
	assert.equal(dados.projetos.length, 10)
	assert.equal(new Set(dados.projetos.map((p: { id: number }) => p.id)).size, dados.projetos.length)
	assert.ok(dados.projetos.some((p: { repositorio: string }) => p.repositorio.endsWith("/project-rh")))
	const techIds = new Set(dados.tecnologias.map((t: { id: number }) => t.id))
	for (const registro of dados.projetos) {
		const projeto = normalizarProjeto(registro)
		assert.ok(projeto.nome.length > 0)
		assert.ok(!projeto.repositorio.includes("github.com/user/"))
		for (const tech of registro.tecnologias) assert.ok(techIds.has(tech.id))
		assert.ok(Array.isArray(projeto.imagens))
	}
	const compras = normalizarProjeto(dados.projetos.find((p: { id: number }) => p.id === 5))
	assert.equal(compras.repositorio, "")
	assert.equal(compras.imagens.length, 1)
})

test("README usa branch padrão e falhas remotas não impedem abrir projeto", async (t) => {
	const chamada = t.mock.method(globalThis, "fetch", async () => new Response(JSON.stringify({
		encoding: "base64", size: 20, content: Buffer.from("# Documentação").toString("base64"),
		download_url: "https://raw.githubusercontent.com/owner/repo/master/README.md",
		html_url: "https://github.com/owner/repo/blob/master/README.md",
	}), { status: 200 }))
	const readme = await obterReadme("https://github.com/owner/repo")
	assert.equal(readme?.conteudo, "# Documentação")
	assert.equal(readme?.baseUrl, "https://raw.githubusercontent.com/owner/repo/master/")
	assert.equal(chamada.mock.calls[0].arguments[0], "https://api.github.com/repos/owner/repo/readme")
	chamada.mock.mockImplementation(async () => new Response("Not Found", { status: 404 }))
	assert.equal(await obterReadme("https://github.com/owner/repo"), null)
	chamada.mock.mockImplementation(async () => { throw new Error("timeout") })
	assert.equal(await obterReadme("https://github.com/owner/repo"), null)
	assert.equal(await obterReadme("https://www.queridascompras.com.br"), null)
})
