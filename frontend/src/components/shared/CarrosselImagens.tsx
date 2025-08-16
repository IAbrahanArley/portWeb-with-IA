import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import Image from "next/image"

export interface CarrosselImagensProps {
	imagens: string[]
}

const CarrosselImagens = (props: CarrosselImagensProps) => {
	// Validação para garantir que há imagens válidas
	const imagensValidas = props.imagens && props.imagens.length > 0 ? props.imagens : []

	// Debug logs para o carrossel
	console.log("🎠 CarrosselImagens Debug:", {
		imagensRecebidas: props.imagens,
		imagensValidas: imagensValidas,
		quantidadeImagens: imagensValidas.length,
		tipoImagens: typeof props.imagens,
	})

	// Se não há imagens, mostra o vídeo como fallback
	if (!imagensValidas || imagensValidas.length === 0) {
		console.log("🎥 CarrosselImagens: Mostrando vídeo como fallback")
		return (
			<div className="md:w-11/12 xl:w-full w-7/10">
				<div className="relative rounded-2xl overflow-hidden bg-zinc-800 h-96">
					<video autoPlay loop muted playsInline className="w-full h-full object-cover">
						<source src="/comingsoon.mp4" type="video/mp4" />
						Seu navegador não suporta vídeos.
					</video>
				</div>
			</div>
		)
	}

	return (
		<Carousel opts={{ loop: true }} className="md:w-11/12 xl:w-full w-7/10">
			<CarouselContent>
				{imagensValidas.map((imagem, index) => {
					console.log(`🖼️ Carrossel Item ${index}:`, {
						imagem,
						tipo: typeof imagem,
						valido: imagem && imagem.length > 0,
					})

					return (
						<CarouselItem
							key={index}
							className="relative h-96 w-full bg-white carousel-item"
						>
							<Image
								src={imagem}
								alt={`Imagem ${index + 1}`}
								fill
								className="object-cover carousel-image"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
								style={{
									background: "transparent",
									backgroundColor: "transparent",
								}}
							/>
						</CarouselItem>
					)
				})}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	)
}

export default CarrosselImagens
