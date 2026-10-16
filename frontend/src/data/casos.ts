export const casos: Record<string, { contexto: string; problema: string; participacao: string; decisoes: string[]; entrega: string }> = {
	"10": {
		contexto: "Projeto pessoal",
		problema: "Organizar vagas, currículos e candidaturas em uma aplicação com diferentes perfis de acesso.",
		participacao: "Desenvolvimento da aplicação full stack com backend Java/Spring Boot, frontend Angular e configuração de infraestrutura e CI/CD.",
		decisoes: ["Autenticação JWT e controle de acesso por perfis.", "PostgreSQL para persistência, com filtros e paginação de vagas.", "Upload de currículos, ambiente Docker Compose e deploy em AWS EC2 com Nginx.", "Pipeline GitHub Actions para build, testes e publicação automatizada."],
		entrega: "Aplicação para gestão de vagas, candidatos e candidaturas, com repositório público para explorar a implementação.",
	},
	"5": {
		contexto: "Experiência profissional · dez/2023 – jun/2025",
		problema: "Conectar consumidores e pequenos lojistas por meio de um marketplace regional.",
		participacao: "Atuação como desenvolvedor Full Stack na implementação e manutenção das APIs, interfaces, integração e deploy.",
		decisoes: ["Java/Spring Boot com persistência JPA/Hibernate.", "Autenticação JWT e controle de acesso com Spring Security.", "Testes unitários JUnit/Mockito e documentação Swagger/OpenAPI.", "React e TypeScript no frontend, ambiente Docker Compose e deploy na DigitalOcean."],
		entrega: "Backend e frontend integrados para o marketplace. As contribuições e o período estão descritos no currículo; o código não foi disponibilizado no portfólio.",
	},
}
