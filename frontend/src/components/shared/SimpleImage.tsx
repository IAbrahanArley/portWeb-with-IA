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
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: SimpleImageProps) {
	return (
		<Image
			src={src}
			alt={alt}
			fill={fill}
			width={!fill ? width : undefined}
			height={!fill ? height : undefined}
			sizes={fill ? sizes : undefined}
			className={className}
			priority={priority}
		/>
	)
}
