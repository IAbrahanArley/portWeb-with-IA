import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import SimpleImage from "./SimpleImage"

export interface CarrosselImagensProps {
	imagens: string[]
}

const CarrosselImagens = (props: CarrosselImagensProps) => {
	// Validação para garantir que há imagens válidas
	const imagensValidas = props.imagens && props.imagens.length > 0 ? props.imagens : ["/logo.png"]

	// Se não há imagens, não renderiza o carrossel
	if (!imagensValidas || imagensValidas.length === 0) {
		return null
	}

	return (
		<Carousel opts={{ loop: true }} className="md:w-11/12 xl:w-full w-7/10">
			<CarouselContent>
				{imagensValidas.map((imagem, index) => (
					<CarouselItem key={index} className="relative h-96 w-full bg-white">
						<SimpleImage src={imagem} alt="Imagem" fill objectFit="cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	)
}

export default CarrosselImagens
