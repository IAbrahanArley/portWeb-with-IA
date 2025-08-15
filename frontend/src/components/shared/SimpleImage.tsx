import Image from "next/image"

interface SimpleImageProps {
	src: string
	alt: string
	fill?: boolean
	width?: number
	height?: number
	className?: string
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
	priority?: boolean
}

export default function SimpleImage({
	src,
	alt,
	fill = false,
	width,
	height,
	className = "",
	objectFit = "cover",
	priority = false,
}: SimpleImageProps) {
	// Debug logs
	console.log("🖼️ SimpleImage Debug:", {
		src,
		alt,
		fill,
		width,
		height,
		className,
		objectFit,
		priority,
		tipoSrc: typeof src,
		srcValido: src && src.length > 0,
	})

	// Validação adicional
	if (!src || src.length === 0) {
		console.error("❌ SimpleImage: src inválido ou vazio:", src)
		return (
			<div className={`bg-red-200 flex items-center justify-center ${className}`}>
				<span className="text-red-500 text-sm">Src inválido: {src}</span>
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
		/>
	)
}
