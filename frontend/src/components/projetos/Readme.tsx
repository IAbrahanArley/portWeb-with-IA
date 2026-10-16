import Markdown, { defaultUrlTransform } from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Readme({ conteudo, baseUrl, repoUrl }: { conteudo: string; baseUrl: string; repoUrl: string }) {
	return (
		<div className="prose prose-zinc prose-invert max-w-full markdown-content">
			<Markdown remarkPlugins={[remarkGfm]} skipHtml components={{
				h1: ({ children }) => <h3>{children}</h3>,
				h2: ({ children }) => <h3>{children}</h3>,
				h3: ({ children }) => <h4>{children}</h4>,
				h4: ({ children }) => <h5>{children}</h5>,
				h5: ({ children }) => <h6>{children}</h6>,
			}} urlTransform={(url, _key, node) => {
				if (url.startsWith("#")) return url
				try {
					return defaultUrlTransform(new URL(url, node.tagName === "img" ? baseUrl : repoUrl).href)
				} catch {
					return ""
				}
			}}>{conteudo}</Markdown>
		</div>
	)
}
