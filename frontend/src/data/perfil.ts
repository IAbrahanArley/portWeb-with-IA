export const perfil = {
	nome: "Abrahan Arley",
	cargo: "Desenvolvedor Backend",
	especialidades: "Java/Spring Boot · PHP/Laravel · Integrações de sistemas",
	resumo: "Desenvolvedor backend com ampla experiência em pagamentos e sistemas financeiros: cobranças Pix, boletos, pagamentos recorrentes e conciliação financeira. Atuação com APIs REST, integrações, mensageria, processamento assíncrono, arquitetura multi-tenant e otimização de consultas SQL.",
	github: "https://github.com/IAbrahanArley",
	linkedin: "https://www.linkedin.com/in/abrahan-arley/",
	contato: "mailto:abrahanarley@gmail.com",
	curriculo: "/AbrahanArleyCV.pdf",
}

export const experiencias = [
	{ empresa: "Pacto Soluções", cargo: "Desenvolvedor Full Stack Pleno", inicio: "set/2026", fim: "out/2026", entregas: ["APIs para operações financeiras, cobranças Pix, boletos e pagamentos recorrentes.", "Manutenção de microsserviços, integrações financeiras e resolução de incidentes em produção."] },
	{ empresa: "Confrapag", cargo: "Desenvolvedor Backend", inicio: "set/2025", fim: "ago/2026", entregas: ["Integrações com webhooks, RabbitMQ, processamento assíncrono e estratégias de retry.", "Conciliação financeira, isolamento multi-tenant e testes com PHPUnit e mocks.", "Redução superior a 70% no tempo de execução de consultas SQL em bases com milhões de registros, conforme experiência relatada no currículo."] },
	{ empresa: "Queridas Compras", cargo: "Desenvolvedor Full Stack", inicio: "dez/2023", fim: "jun/2025", entregas: ["APIs Java/Spring Boot com JPA/Hibernate, autenticação JWT e Spring Security.", "Testes JUnit/Mockito, documentação OpenAPI, interfaces React/TypeScript e deploy na DigitalOcean."] },
	{ empresa: "GoBeesiness — Fábrica de Software", cargo: "Desenvolvedor Backend", inicio: "jan/2024", fim: "jun/2024", entregas: ["Backend Java/Spring Boot, persistência JPA/Hibernate e segurança JWT.", "Docker Compose, GitFlow e participação em sprints e entregas semanais."] },
]

export const formacoes = [
	{ curso: "MBA em Engenharia de Software", instituicao: "UNINASSAU", periodo: "ago/2025 – em andamento" },
	{ curso: "MBA em Inteligência Artificial", instituicao: "Instituto Líbano", periodo: "ago/2025 – ago/2026" },
	{ curso: "Tecnólogo em Sistemas para Internet", instituicao: "UNIESP", periodo: "jan/2023 – jun/2025" },
]

export const competencias = [
	{ grupo: "Backend", itens: "Java, Spring Boot, Spring Data JPA, Hibernate, Spring Security, PHP e Laravel." },
	{ grupo: "Dados e integrações", itens: "PostgreSQL, MySQL, RabbitMQ, APIs REST, webhooks e processamento assíncrono." },
	{ grupo: "Qualidade", itens: "JUnit, Mockito, PHPUnit e Swagger/OpenAPI." },
	{ grupo: "Infraestrutura", itens: "Docker, Docker Compose, AWS EC2/S3, GitHub Actions, Linux e Nginx." },
]
