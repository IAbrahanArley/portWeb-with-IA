export interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export default function Container(props: ContainerProps) {
	return <div className={`site-container ${props.className ?? ""}`}>{props.children}</div>
}
