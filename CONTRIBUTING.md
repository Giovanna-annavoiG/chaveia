# Padrões de contribuição — CHAVEIA

## Branches
- `main`: versão estável, nunca se trabalha direto nela.
- `develop`: integração das funcionalidades prontas.
- `feature/<nome>`, `fix/<nome>`, `docs/<nome>`: uma por tarefa, saem da `develop` e voltam para ela.

## Commits (Conventional Commits 1.0.0)
Formato: `tipo(escopo): descrição curta no imperativo`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Exemplos:
- `feat(bracket): add single elimination generator`
- `fix(auth): block organizer from editing another organizer's bracket`
- `docs: add functional requirements`

## Regras
- Idioma do código, dos commits e das branches: inglês.
- Um commit = uma mudança lógica.
- Nunca commitar senhas, chaves ou arquivos `.env`.