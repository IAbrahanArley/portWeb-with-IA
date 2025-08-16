"use client"

import Image from "next/image"
import { useState } from "react"

interface RobustImageProps {
	src: string
	alt: string
	fill?: boolean
	width?: number
	height?: number
	className?: string
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
	priority?: boolean
	sizes?: string
}

export default function RobustImage({
	src,
	alt,
	fill = false,
	width,
	height,
	className = "",
	objectFit = "cover",
	priority = false,
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: RobustImageProps) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	// Se houve erro, mostra uma imagem padrão
	if (error) {
		return (
			<div
				className={`bg-gray-200 flex items-center justify-center robust-image-container ${className}`}
			>
				<span className="text-gray-500 text-sm">Imagem não disponível</span>
			</div>
		)
	}

	return (
		<div className={`relative robust-image-container ${className}`}>
			{loading && (
				<div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
					<span className="text-gray-500 text-sm">Carregando...</span>
				</div>
			)}

			<Image
				src={src}
				alt={alt}
				fill={fill}
				width={!fill ? width : undefined}
				height={!fill ? height : undefined}
				sizes={fill ? sizes : undefined}
				className={`transition-opacity duration-300 robust-image ${
					loading ? "opacity-0" : "opacity-100"
				}`}
				style={{
					objectFit,
					background: "transparent",
					backgroundColor: "transparent",
				}}
				priority={priority}
				onError={() => {
					console.error("❌ Erro ao carregar imagem:", src)
					setError(true)
				}}
				onLoad={() => {
					console.log("✅ Imagem carregada com sucesso:", src)
					setLoading(false)
				}}
			/>
		</div>
	)
}
