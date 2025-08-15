import { NextResponse } from "next/server"
import { getTecnologias, getTecnologiasDestaque } from "@/app/actions/tecnologias"

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const destaque = searchParams.get("destaque")

		if (destaque === "true") {
			const tecnologias = await getTecnologiasDestaque()
			return NextResponse.json(tecnologias)
		}

		const tecnologias = await getTecnologias()
		return NextResponse.json(tecnologias)
	} catch (error) {
		console.error("Erro na API de tecnologias:", error)
		return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
	}
}
