import React from "react"
import ConteudoMD from "../shared/ConteudoMD"
export interface ReadmeProps {
	conteudo: string
}
const Readme = (props: ReadmeProps) => {
	return (
		<div className="flex flex-col items-center p-6 border border-[#E4DAED] overflow-x-hidden w-full">
			<div
				className="prose prose-zinc prose-invert w-full max-w-full"
				style={{ maxWidth: "100%" }}
			>
				<ConteudoMD conteudo={props.conteudo} />
			</div>
		</div>
	)
}

export default Readme
