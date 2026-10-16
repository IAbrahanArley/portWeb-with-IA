"use client"

import Link from "next/link"

export default function Error({ reset }: { reset: () => void }) {
	return <main id="conteudo" role="alert" className="site-container error-page">
		<h1 className="page-title">Não foi possível carregar</h1>
		<p>Tente novamente ou volte ao catálogo de projetos.</p>
		<button onClick={reset} className="button-primary">Tentar novamente</button>
		<Link href="/projetos" className="block underline">Voltar aos projetos</Link>
	</main>
}
