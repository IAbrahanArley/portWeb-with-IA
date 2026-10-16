"use client"

import { useEffect, useRef, useState } from "react"
import { IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"
import BalaoMensagem from "./BalaoMensagem"

export default function JanelaChat() {
	const { mensagens, pensando, adicionarMensagem, limparMensagens, erro } = useChat()
	const [texto, setTexto] = useState("")
	const fimChatRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" })
	}, [mensagens, pensando])

	return (
		<div className="flex flex-col bg-zinc-200 rounded-2xl text-black overflow-hidden max-h-[70dvh]">
			<div className="flex justify-between items-center bg-white p-4 gap-3">
				<h2 className="text-lg font-bold">Assistente do portfólio</h2>
				<button type="button" aria-label="Limpar conversa" onClick={limparMensagens} disabled={pensando} className="p-2 rounded-lg hover:bg-zinc-100 disabled:opacity-50"><IconReload size={24} aria-hidden="true" /></button>
			</div>
			<div role="log" aria-label="Histórico da conversa" aria-live="polite" className="flex flex-col p-3 gap-3 h-72 overflow-y-auto overscroll-contain">
				{mensagens.length === 0 ? <p className="p-4">Pergunte sobre experiências e projetos. Os dados atualizados também estão disponíveis no currículo e nas páginas do portfólio.</p> : mensagens.map((mensagem, i) => <BalaoMensagem key={mensagem.id} mensagem={mensagem} omitirAutor={i > 0 && mensagens[i - 1].autor === mensagem.autor} />)}
				{pensando ? <p role="status">Aguardando resposta…</p> : null}
				<div ref={fimChatRef} />
			</div>
			{erro ? <p role="alert" className="text-red-800 px-4 py-2 text-sm">{erro}</p> : null}
			<form className="flex items-center gap-2 p-3 bg-white" onSubmit={(e) => {
				e.preventDefault()
				if (!texto.trim() || pensando) return
				void adicionarMensagem(texto.trim())
				setTexto("")
			}}>
				<label htmlFor="mensagem-chat" className="sr-only">Sua mensagem</label>
				<input id="mensagem-chat" name="mensagem" type="text" autoComplete="off" maxLength={2000} value={texto} onChange={(e) => setTexto(e.target.value)} className="min-w-0 flex-1 rounded-lg bg-zinc-100 p-3" placeholder="Pergunte sobre um projeto…" />
				<button type="submit" aria-label="Enviar mensagem" disabled={pensando || !texto.trim()} className="shrink-0 p-3 rounded-full bg-blue-700 text-white disabled:opacity-50"><IconSend size={20} aria-hidden="true" /></button>
			</form>
		</div>
	)
}
