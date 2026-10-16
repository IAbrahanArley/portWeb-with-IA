-- Fontes: currículo de Abrahan Arley e confirmações do usuário.
-- Preserva imagens, IDs e dados não relacionados à atualização.
BEGIN;
LOCK TABLE public.projetos IN SHARE ROW EXCLUSIVE MODE;
SELECT setval('public.projetos_id_seq', GREATEST(
  (SELECT last_value FROM public.projetos_id_seq),
  (SELECT COALESCE(MAX(id), 1) FROM public.projetos)
), true);

UPDATE public.projetos SET nome = 'PedeRapidoAi',
  descricao = 'Sistema pessoal de gestão de pedidos para restaurantes, com autenticação, rotas protegidas, controle de sessão e acompanhamento por Kanban com drag-and-drop. Desenvolvido com Next.js, PostgreSQL, Prisma, Tailwind CSS, shadcn/ui e NextAuth.js.',
  "deployUrl" = 'https://pede-rapido-ai.vercel.app/' WHERE id = 1;
UPDATE public.projetos SET descricao = 'Projeto extensionista que evoluiu de uma página de divulgação de ações sociais para um sistema web de gestão de doações da Igreja Anglicana Comunhão. Backend em Node.js, persistência em MariaDB e ambiente com Docker. O projeto também possui testes end-to-end com Cypress e cenários BDD com Cucumber.' WHERE id = 2;
UPDATE public.projetos SET repositorio = '', "deployUrl" = 'https://www.queridascompras.com.br',
  descricao = 'Marketplace regional desenvolvido em atuação profissional como desenvolvedor Full Stack, de dezembro de 2023 a junho de 2025. Implementação de APIs REST com Java e Spring Boot, persistência com JPA/Hibernate, autenticação JWT com Spring Security, testes com JUnit e Mockito e documentação OpenAPI. Interfaces em React e TypeScript, integração frontend-backend e deploy na DigitalOcean.' WHERE id = 5;
UPDATE public.projetos SET tipo = 'api' WHERE id = 6;
UPDATE public.projetos SET nome = 'Centros comunitários', tipo = 'api' WHERE id = 7;

INSERT INTO public.projetos (nome, descricao, imagens, nivel, tipo, destaque, repositorio, "deployUrl")
SELECT 'Sistema de Recrutamento e Gestão de Candidaturas',
  'Projeto pessoal para gestão de vagas, candidatos, currículos e candidaturas. Backend Java com Spring Boot, autenticação JWT e controle de acesso por perfis. Inclui upload de currículos, paginação, filtros e PostgreSQL. Frontend Angular, ambiente Docker/Docker Compose, deploy AWS EC2 com Nginx e pipeline de CI/CD com GitHub Actions.',
  ARRAY[]::text[], 3, 'web', true, 'https://github.com/IAbrahanArley/project-rh', NULL
WHERE NOT EXISTS (SELECT 1 FROM public.projetos WHERE repositorio = 'https://github.com/IAbrahanArley/project-rh');

INSERT INTO public."_ProjetoToTecnologia" ("A", "B")
SELECT p.id, t.id FROM public.projetos p CROSS JOIN public.tecnologias t
WHERE p.repositorio = 'https://github.com/IAbrahanArley/project-rh'
  AND t.nome IN ('Java','Spring Boot','Spring Data JPA','Hibernate','Spring Security','Angular','PostgreSQL','Docker','Docker Compose','AWS EC2','AWS S3','Nginx','GitHub Actions')
ON CONFLICT ("A", "B") DO NOTHING;
COMMIT;

SELECT id, nome, tipo, repositorio, "deployUrl" FROM public.projetos ORDER BY id;
