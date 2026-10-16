"use client"

import { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { experiencias } from "@/data/perfil"

export default function Experiencia() {
	const [ativa, setAtiva] = useState(1)
	const botoes = useRef<Array<HTMLButtonElement | null>>([])
	const experiencia = experiencias[ativa]
	return <section id="experiencia" className="experience-section" aria-labelledby="titulo-experiencia">
		<div className="section-heading" data-motion><h2 id="titulo-experiencia">Experiência em produção.</h2><p>Integrações, dados e operação no mundo real.</p></div>
		<div className="experience-layout">
			<div className="experience-tabs" role="tablist" aria-label="Experiências profissionais" aria-orientation="vertical" data-motion="side">
				{experiencias.map((item, i) => <button key={item.empresa} ref={(element) => { botoes.current[i] = element }} role="tab" type="button" id={`experiencia-tab-${i}`} aria-controls="experiencia-painel" aria-selected={ativa === i} tabIndex={ativa === i ? 0 : -1} onClick={() => setAtiva(i)} onKeyDown={(event) => {
					let proxima = i
					if (event.key === "ArrowDown") proxima = (i + 1) % experiencias.length
					else if (event.key === "ArrowUp") proxima = (i - 1 + experiencias.length) % experiencias.length
					else if (event.key === "Home") proxima = 0
					else if (event.key === "End") proxima = experiencias.length - 1
					else return
					event.preventDefault(); setAtiva(proxima); botoes.current[proxima]?.focus()
				}}><span>{item.empresa.replace(" — Fábrica de Software", "")}</span><ArrowUpRight size={22} aria-hidden="true" /></button>)}
			</div>
			<div role="tabpanel" id="experiencia-painel" aria-labelledby={`experiencia-tab-${ativa}`} tabIndex={0} className="experience-panel" data-motion>
				<div key={ativa} className="experience-panel-content">
					<p className="experience-period">{experiencia.inicio} — {experiencia.fim}</p>
					<h3>{experiencia.cargo}</h3>
					<ul>{experiencia.entregas.map((entrega) => <li key={entrega}>{entrega}</li>)}</ul>
				</div>
			</div>
		</div>
		<noscript><p>Consulte o currículo em PDF para o histórico profissional completo.</p></noscript>
	</section>
}
