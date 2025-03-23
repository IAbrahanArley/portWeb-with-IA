import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export interface ProjetosProps {
	titulo: string
	lista: Projeto[]
}

export default function Projetos({ lista, titulo }: ProjetosProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h1 className="w-full text-2xl font-bold text-white/70">{titulo}</h1>
			<Carousel opts={{ align: "center", loop: true }} className="w-full">
				<CarouselContent className="flex ">
					{lista.map((projeto) => (
						<CarouselItem
							key={projeto.id}
							className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 sm:basis-2/3"
						>
							<ItemProjeto projeto={projeto} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
