import { ArrowDown } from "lucide-react"
import { perfil } from "@/data/perfil"

export default function MiniCV() {
	return <section className="about-section" id="sobre" aria-labelledby="titulo-sobre">
		<h2 id="titulo-sobre" data-motion>Código com contexto.</h2>
		<div className="about-copy">
			<p className="about-lead" data-motion data-delay="70">Por trás de cada sistema, existe um negócio que precisa funcionar.</p>
			<p data-motion data-delay="140">Tenho ampla experiência com pagamentos e sistemas financeiros, incluindo cobranças Pix, boletos, pagamentos recorrentes e conciliação financeira. Minha atuação combina Java/Spring Boot e PHP/Laravel com integrações, mensageria e processamento assíncrono — do desenho da API à resolução de incidentes em produção.</p>
			<div className="about-facts" data-motion data-delay="210"><p><strong>Desde 2023</strong><span>Desenvolvendo software</span></p><p><strong>Pagamentos e finanças</strong><span>Integrações, cobranças e conciliação</span></p></div>
			<a href={perfil.curriculo} download className="text-link" data-motion data-delay="250">Conheça minha trajetória <ArrowDown size={18} aria-hidden="true" /></a>
		</div>
	</section>
}
