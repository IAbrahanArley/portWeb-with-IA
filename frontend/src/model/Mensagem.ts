export default interface Mensagem {
	id: string
	texto: string
	autor: string
	lado: "esquerda" | "direita"
	icone: string
}
