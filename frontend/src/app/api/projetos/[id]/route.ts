import { NextResponse } from "next/server"
import { getProjeto } from "@/app/actions/projetos"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params
		const projeto = await getProjeto(id)

		if (!projeto) {
			return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 })
		}

		return NextResponse.json(projeto)
	} catch (error) {
		console.error("Erro na API de projeto:", error)
		return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
	}
}
