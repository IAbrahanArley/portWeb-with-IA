# Correção do build na Vercel — 16/10/2026

O deployment de produção `dpl_2ix7GJDdv5JWgzqHfrFHEyjR5Whu`, do commit `f4c2678`, foi bloqueado pela plataforma com `VULNERABLE_NEXTJS_VERSION`: Next.js 15.2.3 vulnerável. A causa foi confirmada nos metadados autenticados do deployment, independentemente do trecho incompleto de log.

Correção: Next.js e eslint-config-next fixados em 15.5.28, React e React DOM em 19.0.9, com atualização do package-lock.json. Mantida a versão principal 15 do framework. O comando `prisma generate && next build` permanece igual; nenhuma migração de banco ou alteração de credenciais é necessária para essa correção.

Referências oficiais:

- https://nextjs.org/blog/CVE-2025-66478
- https://nextjs.org/blog/nextjs-security-update-october-14-2026

O segundo aviso recomenda 15.5.28 como versão corrigida da linha de manutenção, incluindo correções posteriores ao bloqueio inicial.

Validação local: `npm run build` (inclui checagem de tipos), `npm run lint` e os cinco testes de `npm test` passaram com as novas versões. A auditoria npm ainda reporta avisos em dependências transitivas, incluindo PostCSS e ferramentas de lint; esta correção não representa uma auditoria completa nem aplica `npm audit fix --force`.
