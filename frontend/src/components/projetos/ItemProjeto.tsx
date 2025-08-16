"use client"
import { Projeto } from "@core"
import Link from "next/link"
import { Globe } from "lucide-react"
import SimpleImage from "@/components/shared/SimpleImage"
import { useEffect, useRef } from "react"

export interface ItemProjetoProps {
	projeto: Projeto
}

export default function ItemProjeto({ projeto }: ItemProjetoProps) {
	const videoRef = useRef<HTMLVideoElement>(null)

	const imagens = projeto.imagens && projeto.imagens.length > 0 ? projeto.imagens : []
	const imagemPrincipal = imagens[0] || null

	useEffect(() => {
		if (videoRef.current && !imagemPrincipal) {
			const playVideo = async () => {
				try {
					await videoRef.current?.play()
					console.log("🎥 Vídeo iniciado com sucesso!")
				} catch (error) {
					console.error("🎥 Erro ao iniciar vídeo:", error)
				}
			}
			playVideo()
		}
	}, [imagemPrincipal])

	return (
		<Link href={`/projeto/${projeto.id}`}>
			<div className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64 group cursor-pointer bg-white">
				{imagemPrincipal ? (
					<SimpleImage
						src={imagemPrincipal}
						alt={projeto.nome}
						fill
						objectFit="cover"
						sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
						className="border-2 border-[#E4DAED] rounded-2xl transition-transform duration-300 group-hover:scale-105"
					/>
				) : (
					<div className="w-full h-full absolute bg-zinc-800">
						<video
							ref={videoRef}
							autoPlay
							loop
							muted
							playsInline
							controls={false}
							className="w-full h-full object-cover"
							preload="auto"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						>
							<source src="/comingsoon.mp4" type="video/mp4" />
						</video>

						{/* Overlay com texto sobre o vídeo */}
					</div>
				)}

				{/* Overlay com informações */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end pointer-events-none">
					<div className="p-4 w-full">
						<h3 className="text-white font-semibold text-lg mb-2 transition-opacity duration-300">
							{projeto.nome}
						</h3>

						{/* Indicador de Deploy */}
						{projeto.deployUrl && (
							<div className="flex items-center gap-2 transition-opacity duration-300">
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
