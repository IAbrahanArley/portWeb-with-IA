import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Container from "./Container"
import Menu from "./Menu"
import BrandMark from "./BrandMark"

export default function Cabecalho() {
	return <header className="site-header">
		<Container className="header-content">
			<Link href="/" className="brand" aria-label="Abrahan Arley — início"><BrandMark /><span>Abrahan Arley<span className="brand-role">Desenvolvedor Backend</span></span></Link>
			<Menu />
			<Link href="/#contato" className="header-contact">Vamos conversar <ArrowUpRight size={18} aria-hidden="true" /></Link>
		</Container>
	</header>
}
