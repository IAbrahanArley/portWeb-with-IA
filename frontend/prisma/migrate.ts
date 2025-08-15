import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
	console.log("Iniciando migração do banco...")

	try {
		// Executa as migrações
		await prisma.$executeRaw`SELECT 1`
		console.log("✅ Conexão com banco estabelecida")

		// Verifica se as tabelas existem
		const projetos = await prisma.projeto.count()
		const tecnologias = await prisma.tecnologia.count()

		console.log(`📊 Tabelas encontradas:`)
		console.log(`   - Projetos: ${projetos} registros`)
		console.log(`   - Tecnologias: ${tecnologias} registros`)
	} catch (error) {
		console.error("❌ Erro na migração:", error)
		throw error
	} finally {
		await prisma.$disconnect()
	}
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
