# Portfólio — Abrahan Arley

Portfólio de desenvolvimento backend com Java/Spring Boot, PHP/Laravel, APIs e integrações. Frontend Next.js 15, React 19, TypeScript, Tailwind CSS e carrosséis Embla. O conteúdo profissional está em `frontend/src/data`.

## Executar o frontend

Requer Node.js 22.18+ (testes TypeScript utilizam a transformação nativa do Node) e npm.

```powershell
cd frontend
npm ci
npx prisma generate
npm run dev -- --port 3100
```

Acesse http://localhost:3100. Sem configuração de banco, o site usa uma cópia dos registros públicos revisados, identificada com a data de atualização. Não há projetos fictícios de demonstração.

## Fontes dos dados

- `src/data/perfil.ts` e `cursos.ts`: conteúdo do currículo fornecido, revisado em 16/10/2026.
- `src/data/casos.ts`: contexto, participação e decisões técnicas dos casos selecionados.
- `src/data/apresentacao-projetos.ts`: títulos de exibição, resumos e capas locais.
- `src/data/portfolio-snapshot.json`: cópia pública do Supabase, com dez projetos, 41 tecnologias e seus vínculos. Atualizar esta cópia após mudanças editoriais no banco; ela é a alternativa durante indisponibilidade ou execução sem credenciais.
- `src/lib/portfolio.ts`: acesso centralizado e deduplicado por renderização; consulta Prisma quando DATABASE_URL está configurada e usa a cópia revisada em caso de falha.

Para conectar o banco, configure DATABASE_URL e DIRECT_URL em `frontend/.env.local` com os valores do seu projeto. Não coloque credenciais no código. A conexão local com o banco não é necessária para revisar a interface.

O chat utiliza o webhook externo já integrado por NEXT_PUBLIC_CHAT_WEBHOOK. Sem esse valor, informa indisponibilidade e mantém os links de contato acessíveis. O fluxo n8n e sua base de conhecimento são externos a este repositório e não foram atualizados nesta entrega.

A pasta backend contém a API NestJS legada. O frontend atual consulta Prisma diretamente; não precisa iniciar essa API para navegar pelo portfólio. Schemas frontend/backend ainda devem ser conciliados antes de futuras mudanças estruturais.

## Verificações

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

Os testes cobrem normalização de URLs/categorias, integridade da cópia pública e tratamento de README ausente ou indisponível. O README é consultado pela API GitHub na branch padrão, com timeout, resolução de links relativos e HTML desativado.

Se o cache padrão do Next estiver ocupado, use uma pasta isolada (já ignorada pelo Git):

```powershell
$env:NEXT_BUILD_DIR = '.next-ui'
npm run build
npm start -- --port 3100
```

Use o mesmo NEXT_BUILD_DIR ao compilar e iniciar. Sem essa variável, o Next mantém o diretório padrão `.next`.

## Referências e dados aplicados

Veja DESIGN.md para direção visual, motion e origem das capas. O planejamento está em PLANO-ATUALIZACAO-PORTFOLIO.md. Scripts SQL de atualização autorizada estão em docs/sql; os scripts evitam duplicação, mas devem ser revisados contra o estado atual antes de uma nova execução. Nenhum comando de recriação de banco é necessário para executar o frontend.
