"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Projeto } from "@/types"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import ItemProjeto from "./ItemProjeto"

export default function Projetos({ lista, titulo, catalogo = false }: { titulo: string; lista: Projeto[]; catalogo?: boolean }) {
	const [api, setApi] = useState<CarouselApi>()
	const [selecionado, setSelecionado] = useState(0)
	const [anterior, setAnterior] = useState(false)
	const [proximo, setProximo] = useState(lista.length > 1)
	const [total, setTotal] = useState(lista.length)
	const [reduced, setReduced] = useState(false)
	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)")
		const atualizar = () => setReduced(media.matches)
		atualizar(); media.addEventListener("change", atualizar)
		return () => media.removeEventListener("change", atualizar)
	}, [])
	useEffect(() => {
		if (!api) return
		const atualizar = () => { setSelecionado(api.selectedScrollSnap()); setAnterior(api.canScrollPrev()); setProximo(api.canScrollNext()); setTotal(api.scrollSnapList().length) }
		atualizar()
		api.on("select", atualizar).on("reInit", atualizar)
		return () => { api.off("select", atualizar).off("reInit", atualizar) }
	}, [api])
	if (!lista.length) return <p className="empty-state">Nenhum projeto nesta categoria. Experimente outro filtro.</p>
	return <section className="projects-section" id={catalogo ? undefined : "projetos"} aria-label={titulo}>
		<div className="section-heading" data-motion>
			<div><h2>{titulo}</h2><p>{catalogo ? "Explore os projetos e suas decisões técnicas." : "Problemas reais. Decisões técnicas. Software entregue."}</p></div>
			{!catalogo ? <Link href="/projetos" className="text-link">Ver todos os projetos <ArrowUpRight size={18} aria-hidden="true" /></Link> : null}
		</div>
		<Carousel setApi={setApi} opts={{ align: "start", loop: false, containScroll: "trimSnaps", duration: reduced ? 0 : 30 }} className={`project-carousel ${api ? "is-ready" : ""}`} data-motion="image">
			<CarouselContent className="project-track">
				{lista.map((projeto) => <CarouselItem key={projeto.id} className="project-slide"><ItemProjeto projeto={projeto} /></CarouselItem>)}
			</CarouselContent>
			<div className="carousel-toolbar">
				<p aria-live="polite" aria-atomic="true">{selecionado + 1} <span>de {total}</span></p>
				<p className="carousel-hint">Arraste para explorar</p>
				<div className="carousel-buttons">
					<button type="button" className="arrow-button" aria-label="Projeto anterior" disabled={!anterior} onClick={() => api?.scrollPrev()}><ArrowLeft size={20} aria-hidden="true" /></button>
					<button type="button" className="arrow-button" aria-label="Próximo projeto" disabled={!proximo} onClick={() => api?.scrollNext()}><ArrowRight size={20} aria-hidden="true" /></button>
				</div>
			</div>
		</Carousel>
	</section>
}
