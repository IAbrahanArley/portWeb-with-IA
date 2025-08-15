-- Adicionar coluna deployUrl na tabela projetos
ALTER TABLE projetos ADD COLUMN IF NOT EXISTS "deployUrl" TEXT;

-- Comentário para documentar a coluna
COMMENT ON COLUMN projetos."deployUrl" IS 'URL do projeto deployado (opcional)';
