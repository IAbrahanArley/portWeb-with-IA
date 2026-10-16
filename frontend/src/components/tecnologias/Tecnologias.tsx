import { Tecnologia } from "@/types"
import SimpleImage from "@/components/shared/SimpleImage"

export default function Tecnologias({ tecnologias }: { tecnologias: Tecnologia[]; tamanhoMenor?: boolean }) {
	return <div className="technology-list">{tecnologias.map((tecnologia) => <div key={tecnologia.id} className="technology"><span className="technology-icon"><SimpleImage src={tecnologia.imagem} alt="" fill sizes="30px" className="object-contain" /></span><span>{tecnologia.nome}</span></div>)}</div>
}
