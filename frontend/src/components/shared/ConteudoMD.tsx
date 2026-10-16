import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export interface ConteudoMDProps { conteudo: string }

export default function ConteudoMD({ conteudo }: ConteudoMDProps) {
	return <Markdown remarkPlugins={[remarkGfm]} skipHtml>{conteudo}</Markdown>
}
