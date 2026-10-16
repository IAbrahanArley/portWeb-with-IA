import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import SimpleImage from "./SimpleImage"

export default function CarrosselImagens({ imagens, nome = "projeto" }: { imagens: string[]; nome?: string }) {
	if (!imagens.length) return null
	return <div className="project-gallery" data-motion="image">
		<Carousel opts={{ loop: imagens.length > 1 }}>
			<CarouselContent>
				{imagens.map((imagem, index) => <CarouselItem key={`${imagem}-${index}`}><div className="project-gallery-frame"><SimpleImage src={imagem} alt={`Imagem ${index + 1} de ${nome}`} fill sizes="(max-width: 768px) 100vw, 1280px" className="object-contain" /></div></CarouselItem>)}
			</CarouselContent>
			{imagens.length > 1 ? <div className="flex justify-end gap-3 mt-4"><CarouselPrevious className="static translate-y-0" aria-label="Imagem anterior" /><CarouselNext className="static translate-y-0" aria-label="Próxima imagem" /></div> : null}
		</Carousel>
	</div>
}
