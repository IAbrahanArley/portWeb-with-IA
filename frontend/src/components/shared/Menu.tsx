"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Menu = () => {
	const caminho = usePathname()
	return (
		<nav className="flex gap-6 justify-center items-center">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Home
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>
				Projetos
			</MenuItem>
			<MenuItem href="/contato" selecionado={false} novaAba={true}>
				Contato
			</MenuItem>
		</nav>
	)
}

export default Menu

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 hover:text-white text-white ${
					props.selecionado ? "border-b-2 text-white" : "text-zinc-500"
				}`}
			>
				{props.children}
			</span>
		</Link>
	)
}
