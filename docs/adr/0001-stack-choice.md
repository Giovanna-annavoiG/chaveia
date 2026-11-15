# ADR 0001: Escolha da stack tecnológica

- **Status:** Aceita
- **Data:** 15/11/2026

## Contexto

O CHAVEIA é um PWA mobile-first para organizar campeonatos amadores em quadras de areia na Baixada Santista. Os requisitos que mais pesaram na decisão:

- Uso na orla, com rede móvel instável, sol forte e uma mão só.
- Atualização da chave em tempo real.
- Autorização por papel (organizador, atleta, visitante) e proteção contra IDOR.
- Auditabilidade: registro de quem alterou o quê, quando, com valor anterior e novo.
- Funcionamento com conexão ruim (cache e fila offline).

## Decisão

- **Interface:** React com Vite, escritos em JavaScript.
- **Back-end e banco:** Supabase (PostgreSQL, autenticação, tempo real e regras de segurança em nível de linha, o Row Level Security).
- **Algoritmo de chaveamento:** implementado em JavaScript dentro do próprio app, para funcionar também sem conexão.
- **Variáveis de ambiente:** URL e chave pública do Supabase ficam em `.env`, ignorado pelo Git. O repositório traz apenas o modelo `.env.example`.

## Alternativas consideradas

| Alternativa | Por que não foi escolhida |
|---|---|
| Firebase | Banco NoSQL, menos natural para relações como campeonato, chave, partidas e times.|
| Servidor próprio (Node/Express + WebSocket) | Risco alto de não concluir o MVP no prazo. |
| Python como API separada | Exigiria um segundo serviço para hospedar e impediria gerar chaves sem conexão. |
| TypeScript | Adicionaria complexidade ao aprendizado. Migração gradual fica como melhoria futura. |

## Consequências

**Positivas**
- Tempo real, autenticação e banco prontos, sem manter servidor próprio.
- Autorização aplicada no banco, onde é mais difícil de burlar.
- Mesmo idioma (JavaScript) em todo o código, com lógica de chaveamento que roda no navegador.

**Negativas e riscos**
- Dependência de um fornecedor.
- As regras que protegem a integridade dos dados (quem pode editar o quê, auditoria) precisam ser aplicadas também no banco, e não apenas na interface.
- A chave pública do Supabase fica exposta no navegador por design. A segurança real depende das regras de acesso do banco, que precisam ser configuradas e testadas.