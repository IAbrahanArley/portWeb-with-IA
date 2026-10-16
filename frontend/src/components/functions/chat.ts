"use server"
import Mensagem from "@/model/Mensagem"

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = process.env.NEXT_PUBLIC_CHAT_WEBHOOK
	if (!webhookUrl) return null

	try {
		const resposta = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chatId,
				mensagem,
			}),
			signal: AbortSignal.timeout(20000),
		})
		if (!resposta.ok) return null

		const msg = await resposta.json()

		// CORREÇÃO: A resposta pode vir como objeto ou array
		if (Array.isArray(msg)) {
			// Se for array: [{ output: "..." }]
			return typeof msg[0]?.output === "string" ? msg[0].output : null
		} else {
			// Se for objeto: { output: "..." }
			return typeof msg?.output === "string" ? msg.output : null
		}
	} catch (error) {
		console.error("Erro ao conversar com n8n:", error)
		return null
	}
}
