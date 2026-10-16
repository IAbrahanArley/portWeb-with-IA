"use client"
import { useEffect, useRef, useState } from "react"

export default function useLocalStorage<T>(chave: string, valorInicial: T) {
	const inicial = useRef(valorInicial)
	const [valor, setValor] = useState<T>(valorInicial)
	const [chaveCarregada, setChaveCarregada] = useState<string | null>(null)

	useEffect(() => {
		try {
			const salvo = window.localStorage.getItem(chave)
			setValor(salvo ? JSON.parse(salvo) : inicial.current)
		} catch {
			setValor(inicial.current)
		}
		setChaveCarregada(chave)
	}, [chave])

	useEffect(() => {
		if (chaveCarregada !== chave) return
		try {
			window.localStorage.setItem(chave, JSON.stringify(valor))
		} catch {
			// O chat continua utilizável quando o navegador bloqueia armazenamento.
		}
	}, [chave, chaveCarregada, valor])

	return [valor, setValor] as const
}
