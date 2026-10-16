-- Aplicado no projeto Portfolio (slmhgkhqxeeijbymyjpe) pelo SQL Editor.
-- Fontes: currículo fornecido, confirmação do usuário e descrições existentes.
-- Apenas acrescenta tecnologias e vínculos; não altera destaque ou projetos.
BEGIN;
LOCK TABLE public.tecnologias IN SHARE ROW EXCLUSIVE MODE;

-- O cadastro prévio usou IDs explícitos: a sequência estava em 1 e o maior ID era 25.
SELECT setval('public.tecnologias_id_seq', GREATEST(
  (SELECT last_value FROM public.tecnologias_id_seq),
  (SELECT COALESCE(MAX(id), 1) FROM public.tecnologias)
), true);

WITH novas(nome, descricao, imagem) AS (VALUES
('PHP', 'Linguagem utilizada no desenvolvimento de aplicações backend.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/php/php-original.svg'),
('Laravel', 'Framework PHP para desenvolvimento de aplicações e APIs.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/laravel/laravel-original.svg'),
('Spring Boot', 'Framework Java para desenvolvimento de aplicações e APIs REST.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/spring/spring-original.svg'),
('Spring Data JPA', 'Abstração de repositórios e persistência de dados com JPA no ecossistema Spring.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/spring/spring-original.svg'),
('Hibernate', 'ORM Java para persistência de dados relacionais.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/hibernate/hibernate-original.svg'),
('Spring Security', 'Framework de autenticação e autorização do ecossistema Spring.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/spring/spring-original.svg'),
('Spring Cloud', 'Ferramentas do ecossistema Spring para aplicações distribuídas.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/spring/spring-original.svg'),
('MySQL', 'Sistema de gerenciamento de banco de dados relacional.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mysql/mysql-original.svg'),
('MariaDB', 'Sistema de gerenciamento de banco de dados relacional utilizado no projeto extensionista.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mariadb/mariadb-original.svg'),
('RabbitMQ', 'Broker de mensagens para filas, eventos e processamento assíncrono.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/rabbitmq/rabbitmq-original.svg'),
('JUnit', 'Framework para testes automatizados em Java.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/junit/junit-original.svg'),
('Mockito', 'Biblioteca de mocks para testes unitários em Java.', 'https://raw.githubusercontent.com/mockito/mockito.github.io/master/img/logo%402x.png'),
('PHPUnit', 'Framework para testes automatizados em PHP.', 'https://cdn.jsdelivr.net/npm/@vscode/codicons@0.0.36/src/icons/beaker.svg'),
('Swagger/OpenAPI', 'Ferramentas e especificação para documentação de APIs HTTP.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/swagger/swagger-original.svg'),
('Docker Compose', 'Ferramenta para configuração e execução de aplicações com múltiplos containers.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/docker/docker-original.svg'),
('AWS EC2', 'Serviço de computação em nuvem utilizado para deploy de aplicações.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'),
('AWS S3', 'Serviço de armazenamento de objetos em nuvem.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'),
('GitHub Actions', 'Automação de pipelines de integração e entrega contínuas.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/githubactions/githubactions-original.svg'),
('Linux', 'Sistema operacional utilizado em ambientes de desenvolvimento e servidores.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/linux/linux-original.svg'),
('Nginx', 'Servidor HTTP e proxy reverso utilizado no deploy de aplicações.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nginx/nginx-original.svg'),
('Angular', 'Framework para interfaces web utilizado no sistema de recrutamento.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/angular/angular-original.svg'),
('NextAuth.js', 'Biblioteca para autenticação e controle de sessões em aplicações Next.js.', 'https://authjs.dev/img/logo-sm.png'),
('shadcn/ui', 'Coleção de componentes utilizada na interface do sistema de pedidos.', 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/shadcnui.svg'),
('Cypress', 'Ferramenta de testes end-to-end descrita no projeto da Igreja.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cypressio/cypressio-original.svg'),
('Cucumber', 'Ferramenta de cenários BDD descrita no projeto da Igreja.', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cucumber/cucumber-plain.svg')
)
INSERT INTO public.tecnologias(nome, descricao, imagem, destaque)
SELECT n.nome, n.descricao, n.imagem, false FROM novas n
WHERE NOT EXISTS (SELECT 1 FROM public.tecnologias t WHERE lower(trim(t.nome)) = lower(n.nome));

WITH vinculos(projeto_id, tecnologia) AS (VALUES
(1,'Next.js'), (1,'PostgreSQL'), (1,'Prisma'), (1,'Tailwind CSS'), (1,'NextAuth.js'), (1,'shadcn/ui'),
(2,'Node.js'), (2,'MariaDB'), (2,'Docker'), (2,'Cypress'), (2,'Cucumber'),
(5,'Java'), (5,'Spring Boot'), (5,'Spring Data JPA'), (5,'Hibernate'), (5,'Spring Security'),
(5,'JUnit'), (5,'Mockito'), (5,'Swagger/OpenAPI'), (5,'Docker'), (5,'Docker Compose'),
(5,'React'), (5,'TypeScript'), (5,'Tailwind CSS'),
(6,'Java'), (6,'Spring Boot'), (6,'PostgreSQL'), (6,'Hibernate')
)
INSERT INTO public."_ProjetoToTecnologia"("A", "B")
SELECT p.id, t.id FROM vinculos v
JOIN public.projetos p ON p.id = v.projeto_id
JOIN public.tecnologias t ON lower(trim(t.nome)) = lower(v.tecnologia)
ON CONFLICT ("A", "B") DO NOTHING;
COMMIT;

-- Consulta de conferência para executar também após a transação.
SELECT 'tecnologias' AS item, count(*) AS quantidade FROM public.tecnologias
UNION ALL SELECT 'vinculos', count(*) FROM public."_ProjetoToTecnologia"
UNION ALL SELECT p.nome, count(r."B") FROM public.projetos p
LEFT JOIN public."_ProjetoToTecnologia" r ON r."A" = p.id
WHERE p.id IN (1,2,5,6) GROUP BY p.id, p.nome;
