import React from "react"
import ConteudoMD from "../shared/ConteudoMD"
export interface ReadmeProps {
	conteudo: string
}
const Readme = (props: ReadmeProps) => {
	return (
		<div className="flex flex-col items-stretch border  p-6 border-[#E4DAED] ">
			<div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
				<ConteudoMD conteudo={props.conteudo} />
			</div>
		</div>
	)
}

export default Readme
