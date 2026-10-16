"use server"

import { carregarPortfolio } from "@/lib/portfolio"

export async function getTecnologias() {
	return (await carregarPortfolio()).tecnologias
}

export async function getTecnologiasDestaque() {
	return (await getTecnologias()).filter((tecnologia) => tecnologia.destaque)
}
