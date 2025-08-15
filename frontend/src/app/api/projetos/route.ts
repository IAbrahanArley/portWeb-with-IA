import { NextResponse } from "next/server"
import { getProjetos } from "@/app/actions/projetos"

export async function GET() {
	try {
		const projetos = await getProjetos()
		return NextResponse.json(projetos)
	} catch (error) {
		console.error("Erro na API de projetos:", error)
		return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
	}
}
