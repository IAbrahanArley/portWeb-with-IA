import { ArrowUpRight, ArrowUp } from "lucide-react"
import Link from "next/link"
import { perfil } from "@/data/perfil"
import Container from "./Container"
import BrandMark from "./BrandMark"

export default function Contato() {
	return <footer id="contato" className="contact-section">
		<Container>
			<div className="contact-top" data-motion><p>Uma ideia, um desafio,<br />uma próxima oportunidade.</p><h2>Vamos construir<br />algo relevante.</h2><a href={perfil.contato} className="contact-action" aria-label="Enviar e-mail para Abrahan Arley"><ArrowUpRight aria-hidden="true" /></a></div>
			<div className="contact-links" data-motion><a href={perfil.contato}>abrahanarley@gmail.com</a><a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://wa.me/5583996775365" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>
			<div className="footer-bottom"><Link href="/" className="brand"><BrandMark /><span>Abrahan Arley</span></Link><p>Engenharia de software, com propósito.</p><a href="#topo" className="back-top" aria-label="Voltar ao início da página"><ArrowUp size={20} aria-hidden="true" /></a></div>
		</Container>
	</footer>
}
