# Diagnóstico e plano de atualização do portfólio

Data: 16/10/2026.

## Escopo e evidências

Revisão do código local, conteúdo curricular nos componentes, arquivos CSV, currículo `C:\Users\abrah\Downloads\AbrahanArleyCV.pdf` (duas páginas lidas e renderizadas) e registros visíveis no painel do Supabase do projeto `slmhgkhqxeeijbymyjpe` (Portfolio, organização AbeApp). O README público de https://github.com/IAbrahanArley/project-rh também foi consultado para contextualizar esse projeto; não houve execução ou auditoria do seu código.

O painel confirmou status Healthy, 9 projetos e inicialmente 16 tecnologias. O plugin Supabase continua retornando falta de permissão; o acesso foi feito pela sessão autenticada do navegador. Após autorização do usuário, o catálogo foi ampliado para 41 tecnologias e 28 vínculos, conforme registro de execução abaixo. O código da aplicação e os registros dos projetos não foram alterados.

As dependências do frontend não estão instaladas neste checkout. Não houve build, teste funcional do site, screenshots do portfólio, medição de contraste ou Lighthouse. Os problemas de interface abaixo são identificados no código; a avaliação da composição visual final depende de renderização em navegador. O currículo foi fornecido após a primeira revisão e passou a ser a fonte da atualização profissional. A relação entre projetos e tecnologias ainda precisa ser conferida.

## O que o portfólio comunica hoje

- Identidade: Abrahan Arley, desenvolvedor Full Stack / Web.
- Formação no site: graduação em Sistemas para Internet pela UNIESP e pós-graduação em Engenharia de Software pela UNINASSAU, descrita como em andamento. A conciliação abaixo acrescenta períodos e o MBA em IA presente no currículo.
- Estrutura: apresentação, tecnologias, três carrosséis (destaques, web, mobile), resumo curricular e chat de IA.
- Contato: WhatsApp no menu e LinkedIn no cabeçalho, este último oculto em telas pequenas.
- Projetos: páginas com descrição, mídia, links de código/deploy, tecnologias e README remoto.
- Implementação: Next.js/React/Tailwind no frontend; consultas atuais de projetos e tecnologias usam Prisma diretamente em Server Actions. Também existe backend NestJS e biblioteca core, com responsabilidades e modelos parcialmente duplicados.
- IA: o código envia mensagens para um webhook e persiste histórico local. A base de conhecimento e o fluxo externo do assistente não estão presentes para verificar a atualização de currículo e projetos.

Com o currículo fornecido, a direção recomendada passa a ser backend com Java/Spring Boot, apoiada por experiência em PHP/Laravel, sistemas financeiros, integrações, mensageria e SQL. Frontend e IA continuam como competências complementares. A seleção de destaques deve demonstrar essa direção por meio de entregas e participação concreta.

## Inventário real do Supabase

Os textos abaixo descrevem o que está cadastrado, sem atestar funcionalidades ou resultados dos produtos.

| Projeto | Cadastro observado | Atualização proposta |
| --- | --- | --- |
| PedeRapidoAi | Destaque; web; duas imagens; GitHub pessoal; deploy com aspas extras no valor | Padronizar nome, limpar URL, verificar demo e documentar quais recursos de IA estão implementados e qual foi sua contribuição. |
| Igreja Anglicana Comunhão | Web; sem imagem e sem deploy; descrição cita projeto acadêmico, Docker, Cypress e Cucumber | Incluir captura real e um caso sobre evolução do projeto e estratégia de testes. Confirmar o que está implementado. |
| Contrate Ai | Destaque; web; sem imagem/deploy; repositório de leifertech | Informar origem, contexto de estudo/colaboração e suas alterações. Acrescentar evidências próprias antes de tratá-lo como caso principal. |
| XadrezConsole | Tipo `jogos`; uma imagem; GitHub pessoal | Torná-lo encontrável: hoje a home consulta somente web/mobile/destaques. Apresentar como projeto educacional de POO. |
| Queridas Compras | Destaque; web; uma imagem; `repositorio` e `deployUrl` apontam para o mesmo site | Separar demo e repositório. Se código privado, indicar isso sem oferecer “Ver Código”. Priorizar como caso comercial se participação e autorização de divulgação forem confirmadas. |
| List Film | Web, embora descrito como API; uma imagem; sem deploy | Classificar como backend/API e apresentar endpoints, arquitetura, validação e testes existentes. |
| Centro cominutarios | Web, embora descrito como API REST; imagem; GitHub community_center | Corrigir nome para “Centros comunitários”, sujeito à confirmação; explicar regras de recursos, negociações e relatórios. |
| BranlyShop | Web; imagem; GitHub pessoal; descrição apenas “loja virtual” | Completar escopo, participação, stack, status e funcionalidades reais. Verificar se há relação com Queridas Compras antes de apresentá-los como casos independentes. |
| Calculadora | Mobile; sem imagem/deploy; descrição apenas “Calculadora” | Acrescentar captura e contexto técnico; manter como projeto complementar conforme objetivo profissional. |

Centro cominutarios, BranlyShop e Calculadora estão na base, mas não no CSV pessoal de seis projetos. Isso não significa que estejam ausentes do site publicado: a aplicação lê o banco. Os exemplos em `projetos2.csv` também não provam que estejam publicados.

## Problemas prioritários

### Dados, navegação e confiança

- `frontend/src/app/actions/projetos.ts:29`: falhas de consulta podem retornar projetos fictícios com repositórios `github.com/user/...` e demo de exemplo. Substituir por conteúdo real previamente validado ou estado de indisponibilidade explícito.
- `frontend/src/components/shared/Menu.tsx:11`: “Projetos” abre `/projeto/1`. Criar destino para o catálogo ou seção de projetos.
- `frontend/src/components/functions/gitHub.ts:2`: leitura assume URL GitHub e branch `main`, sem checar resposta HTTP. Queridas Compras já viola essa suposição. Tornar README opcional e tratar repositório privado, URL inválida e arquivo ausente.
- `frontend/src/app/(paginas)/projeto/[id]/page.tsx:14`: projeto inexistente devolve página vazia; usar página 404 e oferecer retorno ao catálogo.
- `frontend/src/app/(paginas)/projeto/[id]/page.tsx:21`: mídia usa apenas imagens após a primeira; com uma única imagem, mostra vídeo genérico. Preservar a imagem existente como alternativa.
- `frontend/src/components/curriculo/Experiencia.tsx:6`: “+1 ano”, “80% cobertura” e “Especialista” aparecem sem contexto. Atualizar tempo por datas e vincular qualquer métrica a projeto, período e evidência; retirar afirmações sem fonte.
- Banco usa tipos em minúsculas e níveis numéricos; os tipos TS usam enums de texto. O cast atual não converte os valores. Definir vocabulário único e adaptar explicitamente os dados.

### Interface e acessibilidade

- `frontend/src/components/projetos/ItemProjeto.tsx:69`: nome e indicação de deploy dependem de hover. Exibir título e resumo sempre; incluir foco visível e comportamento equivalente por teclado.
- `frontend/src/components/projetos/Projetos.tsx:20`: seções usam h1 repetidamente. Organizar um h1 principal e h2/h3 de acordo com a hierarquia.
- `frontend/src/components/projetos/Projetos.tsx:34`: controles do carrossel são ocultos no celular. Garantir alternativa acionável ao gesto ou trocar catálogo por lista visível.
- `frontend/src/app/layout.tsx:19`: idioma está `en`, embora o conteúdo seja português; usar `pt-BR`. Incluir main e link para pular navegação.
- `frontend/src/components/chat/BotaoChat.tsx:9`: gatilho é uma div. Usar botão com nome acessível.
- `frontend/src/components/chat/BotaoChat.tsx:17`: popover tem largura mínima definida por 400 px; ajustar à viewport e ao teclado do celular.
- `frontend/src/components/chat/JanelaChat.tsx:26`: ícone de limpar é clicável sem botão semântico; input sem label, botão de enviar sem nome e campo sem foco visível equivalente. Adicionar estados anunciáveis de envio, resposta e erro.
- Vídeos automáticos e rolagem suave precisam respeitar preferência de movimento reduzido; conteúdo essencial deve continuar visível sem animações.

### Desempenho e manutenção

- `frontend/public/background.svg`: 30.081.868 bytes, aproximadamente 30 MB antes de transferência/compressão. Substituir por fundo simples ou asset otimizado e medir impacto real no carregamento.
- `frontend/public/comingsoon.mp4`: cerca de 5,9 MB; usado como alternativa repetida para projetos sem mídia. Preferir estado editorial honesto ou captura real e carregar vídeos somente quando necessários.
- Frontend e backend possuem schemas Prisma diferentes (`deployUrl` só no frontend) e tipos duplicados. Definir uma responsabilidade para acesso e evolução dos dados antes de refatorar.
- O script `db:seed` aponta para `prisma/seed.ts`, ausente neste checkout. Tornar o processo de preparação reproduzível e corrigir README, nomes de pastas e variáveis documentadas.
- `frontend/src/hooks/useLocalStorage.ts:6`: acesso a localStorage no inicializador merece correção para prerenderização e tratamento de JSON inválido.
- Metadados são genéricos; criar título/descrição próprios por projeto, imagem de compartilhamento, sitemap e robots quando domínio e conteúdo estiverem definidos.

### Acesso aos dados

O painel do Supabase mostra RLS desativado nas três tabelas públicas (`projetos`, `tecnologias`, `_ProjetoToTecnologia`). Antes de alterar políticas, verificar grants e caminhos de acesso reais. Planejar leitura pública apenas do conteúdo publicado e escrita restrita, preservando as consultas do servidor. Não concluir exposição de escrita apenas pelo aviso de RLS; isso depende das permissões existentes.

## Direção editorial e visual proposta

Conceito: mostrar como Abrahan constrói e mantém APIs e integrações para operações reais, usando experiência financeira, decisões de arquitetura e projetos executáveis como evidência. Título proposto: “Desenvolvedor Backend”. Subtítulo proposto: “Java/Spring Boot, PHP/Laravel e integrações de sistemas.”

Usar a referência local Vercel da skill awesome-design-md para hierarquia, legibilidade, espaçamento e estados de controles. Adaptar ao portfólio: fundo grafite, texto claro, um azul de ação, tipografia sem serifa e imagens dos próprios projetos. A cor atual pode ser preservada como identidade caso seja uma preferência; a referência não impõe mudança de marca. Evitar copiar gradientes, rótulos monoespaçados e grades decorativas da referência. A direção definitiva e os tokens serão escolhidos na implementação com design-taste-frontend e verificados no navegador.

Ordem sugerida para a página:

1. Apresentação com nome, especialidade e proposta de valor factual; ação principal “Ver projetos” e acesso claro a contato/currículo.
2. Dois ou três casos selecionados, com tela, problema, participação e resultado comprovável. Candidatos prioritários após leitura do currículo: Sistema de Recrutamento (project-rh), Queridas Compras e um caso de API ou sistema de pedidos. Experiências financeiras ganham seção própria, sem presumir repositórios públicos.
3. Experiência e formação com datas, função e entregas.
4. Catálogo completo com filtros conforme projetos reais: web, backend/API, mobile e jogos. Sem repetir o mesmo projeto em três carrosséis.
5. Competências relacionadas aos projetos em que foram utilizadas.
6. Contato, GitHub, LinkedIn e currículo; chat como recurso complementar.

O catálogo filtrável pode ser a principal interação da página. A pessoa deve conseguir avaliar os trabalhos e entrar em contato mesmo com o chat indisponível.

## Planejamento de execução

| Ordem | Trabalho | Entrega e critério de conclusão |
| --- | --- | --- |
| 1 — Conteúdo | Aplicar conciliação do currículo já lido, nove registros e projetos adicionais | Atualizar posicionamento para backend; incluir quatro experiências, três formações e project-rh; resolver correspondências de entregas/Igreja. Inventário com fonte, datas, autoria/participação, stack, imagens, links, status e pendências. |
| 2 — Integridade | Corrigir URLs, categorias, níveis, README, 404 e alternativas do banco | Cada projeto abre corretamente; ausência de código/demo não produz botão inválido; falha do banco não publica exemplos fictícios. |
| 3 — Estrutura editorial | Escrever apresentação, casos e experiência | Texto completo com afirmações apoiadas em fontes e seleção de destaques coerente com objetivo profissional. |
| 4 — Design e acessibilidade | Definir tokens, redesenhar home, detalhe e contato | Revisão a 390, 768 e 1440 px; sem overflow; títulos legíveis, navegação por teclado, foco visível e controles nomeados. |
| 5 — Desempenho e dados | Otimizar mídia, alinhar modelos e revisar grants/RLS | Fundo pesado substituído, mídia carregada sob demanda, preparação local documentada e acesso validado sem quebrar a leitura pública. |
| 6 — Assistente | Sincronizar conteúdo profissional validado com fonte do chat | Respostas coerentes com currículo e projetos, indicação de limitações, erro recuperável e contato disponível durante indisponibilidade. |
| 7 — Validação final | Build, tipos, lint, navegação, estados de erro e compartilhamento | Checks disponíveis passam; screenshots revisadas; links e filtros exercitados; medição de carregamento e contraste registrada. |

Fases 1 e 2 precedem a troca de aparência. A fase 6 depende de acesso ao fluxo externo e à fonte de conhecimento do assistente.

## Conciliação com o currículo recebido

### Posicionamento e experiência

O currículo declara “Backend Software Engineer | Java/Spring Boot” e 3 anos de experiência. A cronologia inicia em dezembro de 2023; há períodos simultâneos que não devem ser somados como tempo adicional. No site, preferir “Atuação desde 2023” ou “Experiência com APIs e integrações desde 2023”, mantendo datas por vínculo. Se optar por “3 anos”, apresentá-lo como resumo aproximado do currículo, sem cálculo por soma de vínculos.

| Experiência no currículo | Período informado | Conteúdo a levar ao site |
| --- | --- | --- |
| Pacto Soluções — Desenvolvedor Full Stack Pleno | set/2026–out/2026 | APIs financeiras, Pix/boletos/recorrência, manutenção de microsserviços, integrações e incidentes em produção. Preservar o término informado; não trocar por “atual” sem confirmação. |
| Confrapag — Desenvolvedor Backend | set/2025–ago/2026 | Webhooks, RabbitMQ, processamento assíncrono/retry, conciliação, arquitetura multi-tenant, otimização SQL e testes com PHPUnit/mocks. |
| Queridas Compras — Desenvolvedor Full Stack | dez/2023–jun/2025 | Java/Spring Boot, JPA/Hibernate, JWT/Spring Security, JUnit/Mockito, OpenAPI, Docker Compose, React/TypeScript e DigitalOcean. Vincular ao caso comercial já cadastrado. |
| GoBeesiness — Fábrica de Software — Desenvolvedor Backend | jan/2024–jun/2024 | Java/Spring Boot, persistência, segurança JWT, Docker Compose, GitFlow e participação em sprints. Exibir período sem somá-lo ao vínculo simultâneo. |

A redução superior a 70% no tempo de consultas SQL está declarada no currículo e associada à Confrapag. Pode substituir métricas genéricas como candidata a resultado contextualizado: “Redução superior a 70% no tempo de execução de consultas SQL, conforme experiência na Confrapag.” O PDF é a fonte da declaração, não uma medição independente. Não generalizar o ganho para todo o sistema nem acrescentar números de latência ou volume. O currículo não sustenta “80% de cobertura de testes”; retirar essa afirmação do site se não houver outra fonte.

Texto inicial proposto para a apresentação, sem acrescentar resultados não documentados:

> Sou Abrahan Arley, desenvolvedor backend com experiência em APIs REST, integrações e sistemas financeiros. Trabalho com Java/Spring Boot e PHP/Laravel, com atuação em mensageria, processamento assíncrono e otimização de consultas SQL.

### Formação e certificações

| Formação no currículo | Período | Tratamento proposto |
| --- | --- | --- |
| MBA em Engenharia de Software — UNINASSAU | ago/2025–atual | “Em andamento”, de acordo com o currículo recebido. |
| MBA em Inteligência Artificial — Instituto Líbano | ago/2025–ago/2026 | Incluir curso e período; o PDF não declara explicitamente conclusão/titulação. Confirmar antes de adicionar selo “concluído”. |
| Tecnólogo em Sistemas para Internet — UNIESP | jan/2023–jun/2025 | Exibir graduação e período; corrigir grafia no texto atual. |

O PDF contém oito itens em “Certificações”: Docker; Java/POO; APIs REST com Spring Boot, Java e Docker; React; Next.js/React; testes JUnit/Mockito/TDD; integração contínua com Jenkins; Google Cloud Computing Foundations. Registrar como “Cursos e certificações” e preservar títulos dos comprovantes. Não inferir certificação profissional de cloud a partir de curso de fundamentos. Os links foram extraídos do PDF, mas os comprovantes no Drive não foram abertos ou validados.

### Projetos adicionais e correspondências

| Item do currículo | Comparação com os nove registros | Ação planejada |
| --- | --- | --- |
| Sistema de Recrutamento e Gestão de Candidaturas — project-rh | Ausente do inventário do Supabase | Incluir como novo projeto e candidato a destaque principal de Java/Spring. Fonte: https://github.com/IAbrahanArley/project-rh. |
| Sistema de Entregas para Restaurantes | Usuário confirmou que é o PedeRapidoAi (id 1) | Manter um único registro. Incorporar Next.js, PostgreSQL, Prisma, Tailwind, shadcn/ui, NextAuth e Kanban à apresentação; conferir implementação do assistente de IA ao revisar o projeto. |
| Projeto Extensionista — Igreja Anglicana Comunhão | Usuário confirmou que o sistema de doações é evolução do cadastro existente (id 2) | Manter um único registro e explicar a evolução da landing page/ações sociais para gestão de doações; conciliar Node.js/MariaDB/Docker do currículo com os testes Cypress/Cucumber descritos no banco. |

Para project-rh, o currículo cita gestão de vagas/candidaturas, autenticação JWT, upload de currículos, filtros/paginação, PostgreSQL, Docker, EC2/Nginx e CI/CD. O README consultado descreve backend Java 21/Spring Boot 3.5, frontend Angular, Flyway, S3 e GitHub Actions. Usar esses dados como documentação de projeto, sem afirmar teste de funcionamento. A página indica deploy por IP HTTP; disponibilidade, domínio e HTTPS devem ser validados antes de publicar botão de demonstração. Não há screenshot do projeto coletado nesta revisão.

Seleção recomendada: project-rh para mostrar backend com entrega completa; Queridas Compras para mostrar experiência comercial; List Film ou Centros comunitários para detalhar API e regras de negócio, ou o sistema de pedidos após conciliação. Contrate Ai perde prioridade até esclarecer participação/origem. Calculadora e XadrezConsole podem permanecer no catálogo complementar.

### Competências a reconciliar com o catálogo

As 16 tecnologias do banco já incluem Java, TypeScript, PostgreSQL, Docker e React. O currículo acrescenta ou destaca competências que não aparecem nesse catálogo: PHP, Laravel, Spring Boot, Spring Data JPA, Hibernate, Spring Security, Spring Cloud, MySQL, RabbitMQ, JUnit, Mockito, PHPUnit, OpenAPI, Docker Compose, AWS EC2/S3, GitHub Actions, Linux e Nginx. Angular está no projeto de recrutamento. Conferir os vínculos por projeto antes de cadastrar relações; o currículo não associa individualmente toda a lista a cada empresa.

Organizar a apresentação por backend, dados/mensageria, testes/documentação e infraestrutura. Associar cada competência a experiência ou projeto e evitar percentuais de domínio. Git/GitHub/GitLab, Jira, Scrum e Kanban podem aparecer como ferramentas e práticas, sem competir com a especialidade principal.

### Ajustes no modelo de conteúdo previstos

Prever perfil profissional, experiências, formações, cursos/certificações e projetos como conteúdo estruturado, com datas e fonte de atualização. Para projetos, acrescentar slug, resumo, problema, contribuição, resultado, status, contexto (profissional/pessoal/acadêmico), mídia e links opcionais. A escolha de JSON/MDX versionado ou tabelas deve ser feita na implementação conforme frequência de edição; não criar banco adicional só para textos estáveis.

O acesso ao currículo para download deve ser implementado a partir de uma cópia própria para publicação, mantendo o PDF original intacto. Este planejamento não publicou o currículo nem transferiu seus contatos para serviços externos. Usar as informações de contato já públicas no site e disponibilizar o PDF quando essa parte da implementação for executada.

## Pendências restantes para fechar a atualização profissional

- Correspondências resolvidas pelo usuário: Sistema de Entregas = PedeRapidoAi; sistema de doações = evolução do projeto da Igreja. Não criar duplicatas.
- Confirmar conclusão do MBA em IA e se o período de Pacto Soluções deve permanecer encerrado em outubro/2026, conforme PDF.
- Confirmar outros projetos além de project-rh que devam entrar, com links ou caminhos.
- Esclarecer participação e origem dos casos não detalhados no currículo, especialmente Contrate Ai.
- Capturas e demos atuais; resultados mensuráveis somente quando houver evidência e permissão para divulgação.
- Fonte atual do assistente e acesso ao fluxo externo, apenas quando formos atualizar o chat.

Enquanto faltarem essas fontes, revisar a apresentação e preparar os campos é possível; substituir datas, cargos, métricas e projetos adicionais por suposições não é.

## Skills e verificações realizadas

- design-taste-frontend: leitura das orientações e lint estático sobre 46 arquivos. O script registrou 31 FAIL e 7 WARN, incluindo falsos positivos como emojis em logs, token de fonte e sombra de popover. Esses números não são uma nota visual nem equivalem a 31 defeitos de UX.
- web-design-guidelines: consulta às regras em https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md e revisão estática dos componentes.
- awesome-design-md: consulta ao índice e à referência local Vercel; apenas proposta de direção, sem aplicação de tema.
- Supabase e computer-use: leitura do painel autenticado e posterior atualização autorizada de tecnologias e vínculos pelo SQL Editor. As políticas não foram alteradas. A conexão do plugin ainda requer regularização independente do status Healthy do banco.

## Atualização do banco executada após confirmação do usuário

Em 16/10/2026, o usuário confirmou as correspondências de PedeRapidoAi e Igreja e autorizou atualização das tecnologias quando necessária. A consulta inicial encontrou 16 tecnologias, nenhum vínculo em `_ProjetoToTecnologia` e uma sequência de IDs desatualizada (valor 1 para maior ID 25).

Foi aplicado pelo SQL Editor o script `docs/sql/2026-10-16-atualizar-tecnologias.sql`, em transação, preservando os registros existentes e os destaques. A sequência foi alinhada ao maior ID antes da inclusão. O script evita repetir nomes e pares projeto/tecnologia em nova execução.

- 25 tecnologias acrescentadas: PHP, Laravel, Spring Boot, Spring Data JPA, Hibernate, Spring Security, Spring Cloud, MySQL, MariaDB, RabbitMQ, JUnit, Mockito, PHPUnit, Swagger/OpenAPI, Docker Compose, AWS EC2, AWS S3, GitHub Actions, Linux, Nginx, Angular, NextAuth.js, shadcn/ui, Cypress e Cucumber.
- 28 vínculos incluídos: PedeRapidoAi (6), Igreja Anglicana Comunhão (5), Queridas Compras (13) e List Film (4).
- As demais competências foram cadastradas sem atribuição especulativa aos projetos existentes. project-rh continua previsto para cadastro em etapa posterior.
- As URLs das novas imagens foram verificadas com resposta HTTP 200. Spring Data/Security/Cloud compartilham o ícone de Spring; Docker Compose utiliza Docker; EC2/S3 utilizam AWS. PHPUnit usa um pictograma genérico de testes do pacote Codicons, não um logotipo oficial. Fontes: Devicon v2.17.0, site/repositório do Mockito, Auth.js, Simple Icons v15 e Codicons 0.0.36.
- Resultado após COMMIT: 41 tecnologias e 28 vínculos. A atualização não modifica descrições, categorias ou URLs dos projetos; essas correções permanecem no plano.

Currículo recebido e conciliado; correspondências de projetos confirmadas pelo usuário. Permanecem as pendências pontuais de datas, autoria e mídia acima. A revisão visual do portfólio permanece pendente de execução local ou URL publicada.

## Entrega implementada — 16/10/2026

Os registros anteriores documentam a fase de análise. Após autorização para executar e o pedido de repaginação, o frontend foi atualizado com direção grafite/turquesa inspirada na imagem enviada, monograma próprio, tipografia Manrope, carrosséis com arraste e botões, filtros por categoria, apresentação de experiências por abas e páginas de projeto com contexto técnico. As animações de entrada, inclinação do monograma e transições respeitam a preferência por movimento reduzido. A direção está registrada em `DESIGN.md`.

Perfil, experiências, formações e oito cursos foram conciliados com o currículo. Uma cópia do PDF foi disponibilizada para download local, preservando o original. As datas e métricas refletem a fonte; a conclusão do MBA em IA continua sem afirmação adicional.

O script `docs/sql/2026-10-16-atualizar-projetos.sql` foi aplicado no painel autenticado: cadastro de project-rh, 13 vínculos de tecnologias, correções de descrições, categorias e URLs. Resultado verificado: 10 projetos, 41 tecnologias e 41 vínculos. O endereço comercial de Queridas Compras deixou de ser tratado como repositório. A demo de RH não foi divulgada porque o endereço consultado não respondeu.

O frontend consulta Prisma quando `DATABASE_URL` está configurada e usa a cópia real versionada do Supabase na ausência dessa configuração. A interface informa a data de revisão. A conexão direta não foi validada neste checkout, que não possui credenciais configuradas. A base externa do assistente n8n não foi atualizada; o chat agora trata indisponibilidade e falhas sem inventar respostas.

Validação: build de produção, ESLint, TypeScript e cinco testes de normalização/segurança de URLs, integridade do catálogo e leitura de README passaram. Revisão no navegador em 390, 768 e 1440 pixels, interação com carrossel e filtros, abas por teclado, download do PDF e páginas inexistentes. O lint estático de design terminou com zero FAIL e zero WARN. Não foi executado Lighthouse. O build local pode usar `NEXT_BUILD_DIR=.next-ui` para evitar o cache antigo bloqueado do Windows.

Próximas etapas operacionais: configurar conexão direta e webhook no ambiente de publicação; atualizar a fonte externa do assistente; revisar autoria e mídia dos projetos ainda pouco documentados; confirmar as datas pendentes; revisar permissões/RLS separadamente. Nenhuma política de acesso foi alterada e nenhum deploy público foi executado nesta entrega.
