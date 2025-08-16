import { Projeto } from "@/types"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import ItemProjeto from "./ItemProjeto"

export interface ProjetosProps {
	titulo: string
	lista: Projeto[]
}

export default function Projetos({ lista, titulo }: ProjetosProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-full md:w-11/12 xl:w-full gap-3 md:gap-5">
			<div className="border-b-2 border-[#fffeff] pb-2 w-full px-2 md:px-0">
				<h1 className="w-full text-xl md:text-2xl font-bold text-[#fffeff]">{titulo}</h1>
			</div>
			<Carousel opts={{ align: "center", loop: true }} className="w-full">
				<CarouselContent className="flex -ml-2 md:-ml-0">
					{lista.map((projeto) => (
						<CarouselItem
							key={projeto.id}
							className="pl-2 md:pl-4 xl:basis-1/3 lg:basis-1/3 md:basis-1/2 sm:basis-2/3"
						>
							<ItemProjeto projeto={projeto} />
						</CarouselItem>
					))}
				</CarouselContent>
				{/* Botões de navegação - visíveis apenas em desktop */}
				<CarouselPrevious className="bg-[#fffeff] text-[#4C1B8A] hidden md:flex" />
				<CarouselNext className="bg-[#fffeff] text-[#4C1B8A] hidden md:flex" />
			</Carousel>
		</div>
	)
}
