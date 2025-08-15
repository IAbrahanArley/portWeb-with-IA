import { Projeto } from "@core"
import Link from "next/link"
import { Globe } from "lucide-react"
import SimpleImage from "@/components/shared/SimpleImage"

export interface ItemProjetoProps {
	projeto: Projeto
}

export default function ItemProjeto({ projeto }: ItemProjetoProps) {
	// Validação para garantir que há imagens válidas
	const imagens = projeto.imagens && projeto.imagens.length > 0 ? projeto.imagens : ["/logo.png"]
	const imagemPrincipal = imagens[0] || "/logo.png"

	// Debug log simples
	console.log("🔍 ItemProjeto:", projeto.nome, "Imagem:", imagemPrincipal)

	return (
		<Link href={`/projeto/${projeto.id}`}>
			<div className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64 group cursor-pointer bg-white">
				<SimpleImage
					src={imagemPrincipal}
					alt={projeto.nome}
					fill
					objectFit="cover"
					className="border-2 border-[#E4DAED] rounded-2xl transition-transform duration-300 group-hover:scale-105"
				/>

				{/* Overlay com informações */}
				<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
					<div className="p-4 w-full">
						<h3 className="text-white font-semibold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{projeto.nome}
						</h3>

						{/* Indicador de Deploy */}
						{projeto.deployUrl && (
							<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Globe size={16} className="text-blue-400" />
								<span className="text-blue-400 text-sm">Disponível Online</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</Link>
	)
}
