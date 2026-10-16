import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import Mensagem from "@/model/Mensagem"
import conversar from "@/components/functions/chat"
import { useState } from "react"
export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])
	const [pensando, setPensando] = useState(false)
	const [erro, setErro] = useState<string | null>(null)
	async function adicionarMensagem(texto: string) {
		if (!texto.trim() || pensando) return
		try {
			setErro(null)
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto,
				autor: "Visitante",
				lado: "direita",
				icone: "",
			}
			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) {
				setErro("O assistente está indisponível. Tente novamente ou use os links de contato do portfólio.")
				return
			}
			const mensagemResposta: Mensagem = {
				id: Id.gerar(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerda",
				icone: "",
			}
			setMensagens((msgs) => [...msgs, mensagemResposta])
		} catch {
			setErro("Não foi possível enviar a mensagem. Tente novamente ou use os links de contato.")
		} finally {
			setPensando(false)
		}
	}
	function limparMensagens() {
		setMensagens([])
	}
	return { chatId, mensagens, adicionarMensagem, limparMensagens, pensando, erro }
}
