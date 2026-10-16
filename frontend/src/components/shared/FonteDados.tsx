export default function FonteDados({ data }: { data: string | null }) {
	if (!data) return null
	const dataFormatada = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${data}T00:00:00Z`))
	return <details className="data-source"><summary>Conteúdo revisado em {dataFormatada}</summary><p>Exibindo uma versão salva enquanto as atualizações online não estão disponíveis.</p></details>
}
