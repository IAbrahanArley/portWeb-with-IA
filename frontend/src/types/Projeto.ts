import Tecnologia from "./Tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Projeto {
	id: string
	nome: string
	descricao: string
	imagens: string[]
	tipo: Tipo
	nivel: Nivel
	tecnologias: Tecnologia[]
	repositorio: string
	deployUrl?: string // URL do projeto deployado (opcional)
	destaque: boolean
}
