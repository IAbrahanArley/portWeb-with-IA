import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { perfil } from "@/data/perfil"
import Cabecalho from "../shared/Cabecalho"
import Container from "../shared/Container"
import HeroMark from "./HeroMark"

export default function Principal() {
	return (
		<section className="hero-section">
			<Cabecalho />
			<Container className="hero-layout">
				<div className="hero-copy">
					<p className="hero-intro" data-motion>Desenvolvedor Backend</p>
					<h1 className="hero-title"><span className="hero-line"><span>Olá, sou</span></span><span className="hero-line"><span className="hero-name">Abrahan Arley.</span></span></h1>
					<p className="hero-position" data-motion data-delay="100">Construo sistemas que movem negócios.</p>
					<p className="hero-description" data-motion data-delay="180">Desenvolvo APIs e integrações, com ampla experiência em pagamentos, conciliação e sistemas financeiros.</p>
					<div className="hero-actions" data-motion data-delay="280">
						<Link href="#projetos" className="button-primary">Explorar projetos <ArrowUpRight size={20} aria-hidden="true" /></Link>
						<a href={perfil.curriculo} download className="text-link">Meu currículo <ArrowDown size={18} aria-hidden="true" /></a>
					</div>
					<div className="hero-technologies" data-motion data-delay="340"><p>Tecnologias do meu dia a dia</p><ul aria-label="Principais tecnologias"><li>Java</li><li>Spring Boot</li><li>PHP</li><li>Laravel</li><li>PostgreSQL</li></ul></div>
				</div>
				<HeroMark />
			</Container>
		</section>
	)
}
