import { repositorioGitHub } from "../../lib/normalizar-projeto.ts"

export async function obterReadme(url: string): Promise<{ conteudo: string; baseUrl: string; repoUrl: string } | null> {
	const repositorio = repositorioGitHub(url)
	if (!repositorio) return null
	const caminho = new URL(repositorio).pathname
	try {
		const resposta = await fetch(`https://api.github.com/repos${caminho}/readme`, {
			headers: { Accept: "application/vnd.github+json" },
			next: { revalidate: 3600 },
			signal: AbortSignal.timeout(5000),
		})
		if (!resposta.ok) return null
		const arquivo = await resposta.json()
		if (arquivo.encoding !== "base64" || typeof arquivo.content !== "string" || typeof arquivo.download_url !== "string" || typeof arquivo.html_url !== "string" || arquivo.size > 200_000) return null
		const raw = new URL(arquivo.download_url)
		const html = new URL(arquivo.html_url)
		if (raw.protocol !== "https:" || raw.hostname !== "raw.githubusercontent.com" || html.protocol !== "https:" || html.hostname !== "github.com") return null
		const conteudo = Buffer.from(arquivo.content, "base64").toString("utf8")
		if (conteudo.length > 200_000) return null
		return { conteudo, baseUrl: new URL(".", raw).href, repoUrl: new URL(".", html).href }
	} catch {
		return null
	}
}
