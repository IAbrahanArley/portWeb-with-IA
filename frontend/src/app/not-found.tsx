import Link from "next/link"

export default function NotFound() {
	return <main id="conteudo" className="site-container error-page">
		<h1 className="page-title">Página não encontrada</h1>
		<p>Este projeto ou endereço não está disponível no portfólio.</p>
		<Link href="/projetos" className="button-primary">Voltar aos projetos</Link>
	</main>
}
