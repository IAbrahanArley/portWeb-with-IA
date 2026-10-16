"use client"

import Image from "next/image"
import { useState } from "react"

interface SimpleImageProps {
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

export default function SimpleImage({
	src,
	alt,
	fill = false,
	width,
	height,
	className = "",
	priority = false,
	objectFit,
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: SimpleImageProps) {
	const [falha, setFalha] = useState<string | null>(null)
	if (falha === src) return (
		<div role="img" aria-label={alt} className={`${fill ? "absolute inset-0" : ""} flex items-center justify-center bg-zinc-800 text-zinc-200 p-3 text-center text-sm ${className}`} style={fill ? undefined : { width, height }}>
			<span>Prévia indisponível</span>
		</div>
	)
	return (
		<Image
			src={src}
			alt={alt}
			fill={fill}
			width={!fill ? width : undefined}
			height={!fill ? height : undefined}
			sizes={fill ? sizes : undefined}
			className={className}
			style={objectFit ? { objectFit } : undefined}
			priority={priority}
			onError={() => setFalha(src)}
		/>
	)
}
