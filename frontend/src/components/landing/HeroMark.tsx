import Image from "next/image"

export default function HeroMark() {
	return <div className="hero-profile" data-motion="image">
		<div className="hero-profile-circle" aria-hidden="true" />
		<div className="hero-profile-photo"><Image src="/abrahan-recorte.webp" alt="Abrahan Arley, desenvolvedor backend" fill priority sizes="(max-width: 700px) 90vw, 520px" /></div>
		<div className="hero-profile-note"><span>Minha especialidade</span><strong>Pagamentos &amp; integrações</strong><span>Java / Spring Boot · PHP / Laravel</span></div>
	</div>
}
