import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export interface CarrosselImagensProps {
	imagens: string[]
}

const CarrosselImagens = (props: CarrosselImagensProps) => {
	return (
		<Carousel opts={{ loop: true }} className="md:w-11/12 xl:w-full w-7/10">
			<CarouselContent>
				{props.imagens.map((imagem, index) => (
					<CarouselItem key={index} className="relative h-96 w-full ">
						<Image src={imagem} alt="Imagem" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	)
}

export default CarrosselImagens
