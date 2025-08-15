"use client"

import Image from "next/image"
import { useState } from "react"

interface OtimizedImageProps {
	src: string
	alt: string
	fill?: boolean
	width?: number
	height?: number
	className?: string
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
	priority?: boolean
}

export default function OtimizedImage({
	src,
	alt,
	fill = false,
	width,
	height,
	className = "",
	objectFit = "cover",
	priority = false,
}: OtimizedImageProps) {
	const [error, setError] = useState(false)

	// Se houve erro, mostra uma imagem padrão
	if (error) {
		return (
			<div className={`bg-gray-200 flex items-center justify-center ${className}`}>
				<span className="text-gray-500 text-sm">Imagem não disponível</span>
			</div>
		)
	}

	return (
		<Image
			src={src}
			alt={alt}
			fill={fill}
			width={!fill ? width : undefined}
			height={!fill ? height : undefined}
			className={className}
			style={{ objectFit }}
			priority={priority}
			onError={() => setError(true)}
			onLoad={() => setError(false)}
		/>
	)
}
