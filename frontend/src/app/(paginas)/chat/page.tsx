"use client"
import ConteudoMD from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import React from "react"
import { useState } from "react"

const Chat = () => {
	const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando } = useChat()
	const [texto, setTexto] = useState("")
	return (
		<div>
			<h1>Chat</h1>
			<h1>chat id: {chatId}</h1>
			<button onClick={limparMensagens}>Limpar mensagens</button>
			<ul>
				{mensagens.map((mensagem, index) => (
					<li key={index} className="flex gap-1">
						<div>{mensagem.autor}:</div>
						<ConteudoMD conteudo={mensagem.texto} />
					</li>
				))}
			</ul>
			{pensando && <div>Estou pensando...</div>}
			<input
				type="text"
				value={texto}
				className="border-2 border-black"
				onChange={(e: any) => {
					setTexto(e.target.value)
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						adicionarMensagem(texto)
						setTexto("")
					}
				}}
			/>
		</div>
	)
}

export default Chat
