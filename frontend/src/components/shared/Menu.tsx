"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()
	return <nav aria-label="Navegação principal" className="main-nav">
		<Link href="/#projetos" aria-current={caminho.startsWith("/projeto") ? "page" : undefined}>Projetos</Link>
		<Link href="/#sobre">Sobre mim</Link>
		<Link href="/#experiencia">Experiência</Link>
		<Link href="/#contato" className="mobile-contact">Contato</Link>
	</nav>
}
