# Documento de Requisitos: CHAVEIA

## 1. Histórico de versões

| Versão | Data | Descrição da alteração | Autor |
|---|---|---|---|
| 0.1.0 | 15/11/2026 | Primeira versão (rascunho) dos requisitos funcionais e não funcionais | [nome da autora] |

> **Status:** rascunho. As decisões pendentes estão na seção 6.

---

## 2. Introdução

### 2.1 Objetivo do documento

Especificar **o que o CHAVEIA deve fazer** (requisitos funcionais) e **como deve operar** (requisitos não funcionais), servindo de base para o desenvolvimento, para os testes e para o texto do TCC.

### 2.2 Escopo do sistema

O CHAVEIA é um PWA mobile-first (Android, iOS e desktop) para a gestão de campeonatos amadores de esportes de areia na Baixada Santista. O sistema permite criar e acompanhar chaves eliminatórias em tempo real, divulgar partidas que precisam de jogadores substitutos e conectar atletas avulsos aos organizadores, com o princípio de **fricção zero**: poucos toques, uso com sol, areia e uma mão só, em rede móvel instável.

### 2.3 Atores

| Ator | Descrição |
|---|---|
| Organizador | Usuário autenticado que cria e gerencia campeonatos, chaves e vagas |
| Atleta avulso | Usuário que navega sem cadastro pesado, procura vagas e campeonatos e contata o organizador |
| Visitante (observador) | Pessoa que apenas acompanha chaves públicas |
| Sistema | O próprio CHAVEIA, em ações automáticas (geração de chave, registro de log, sincronização) |

### 2.4 Convenções

- **IDs:** `RF##` para requisitos funcionais e `RNF##` para não funcionais. Um ID nunca é reutilizado, mesmo que o requisito seja removido.
- **Prioridade:**
  - **MVP:** entra na entrega do TCC.
  - **Desejável:** entra se o prazo permitir.
  - **Futuro:** fora do TCC, registrado para evolução do sistema.
- **Critério de aceite (RF):** condição verificável que comprova o cumprimento do requisito.
- **Metas marcadas como "a validar"** são propostas iniciais, a serem confirmadas ou ajustadas nos testes de usabilidade.

### 2.5 Premissas e restrições

- A stack tecnológica e suas justificativas estão registradas no [ADR 0001](adr/0001-stack-choice.md).
- Uso previsto na orla: rede móvel instável, telas pequenas e muita luz solar.
- O desenvolvimento é conduzido por uma única pessoa, com prazo definido pelo calendário do TCC.
- Os requisitos descrevem o **quê**, sem citar tecnologia. As escolhas técnicas ficam nos ADRs.

---

## 3. Requisitos funcionais

| ID | Requisito | Critério de aceite | Prioridade | Objetivo do TCC |
|---|---|---|---|---|
| RF01 | O organizador deve poder autenticar-se para acessar a área de gestão | Visitante sem login não acessa a área do organizador | MVP | A preencher |
| RF02 | O organizador deve poder criar um campeonato informando nome, local, data e número de times | O campeonato criado aparece na lista do organizador | MVP | A preencher |
| RF03 | O organizador deve poder gerar a chave eliminatória a partir dos times inscritos, inclusive quando o número de times não é potência de 2 | Com 5 times, a chave tem 8 posições e 3 byes, e existe um único campeão | MVP | A preencher |
| RF04 | O organizador deve poder lançar o resultado de uma partida e avançar o vencedor na chave | Ao salvar o resultado, o vencedor aparece na fase seguinte sem ação adicional | MVP | A preencher |
| RF05 | O observador deve ver as alterações da chave sem recarregar a página | Resultado lançado em um aparelho aparece em outro já aberto | MVP | A preencher |
| RF06 | O organizador deve poder definir a chave como pública ou privada | Chave privada não aparece em listagens públicas | MVP | A preencher |
| RF07 | O organizador deve poder compartilhar a chave pública por link | O link abre a chave sem exigir login | MVP | A preencher |
| RF08 | Somente o organizador dono deve poder editar seu campeonato e sua chave | Quando o organizador B tenta editar a chave do organizador A, a ação é negada e registrada | MVP | A preencher |
| RF09 | O sistema deve registrar em log cada ação relevante | Cada registro contém autor, ação, data/hora, valor anterior e valor novo | MVP | A preencher |
| RF10 | O organizador deve poder publicar uma partida que precisa de jogador substituto | A vaga aparece no mural com local, data/hora e quantidade de vagas | MVP | A preencher |
| RF11 | O atleta avulso deve poder ver campeonatos públicos e vagas sem cadastro | A listagem abre sem login | MVP | A preencher |
| RF12 | O atleta avulso deve poder ver as vagas por proximidade, mediante consentimento (ver seção 6, item 1) | Com consentimento, as vagas são ordenadas por distância. Sem consentimento, o atleta filtra por cidade ou praia | MVP | A preencher |
| RF13 | O atleta avulso deve poder abrir uma conversa no WhatsApp do organizador | O botão abre o link `wa.me` com o contato que o organizador autorizou exibir | MVP | A preencher |
| RF14 | O usuário deve poder solicitar a exclusão de seus dados pessoais | Após a exclusão, perfil e contato não são exibidos nem recuperáveis | MVP | A preencher |
| RF15 | O usuário deve receber notificação de mudanças relevantes | A notificação chega após um resultado ser lançado | Desejável | A preencher |
| RF16 | O organizador deve poder lançar resultado sem internet e sincronizá-lo depois (ver seção 6, item 2) | O resultado lançado offline é enviado ao reconectar, sem perda | Desejável | A preencher |
| RF17 | O sistema deve suportar outros formatos de campeonato (dupla eliminação, fase de grupos) | A definir | Futuro | A preencher |

---

## 4. Requisitos não funcionais

| ID | Categoria | Requisito | Como verificar | Prioridade |
|---|---|---|---|---|
| RNF01 | Desempenho | Na tela da chave, o maior conteúdo visível (LCP) carrega em até 2,5 s e a resposta a interações (INP) fica em até 200 ms, em 4G simulado (limites "bons" do Core Web Vitals) | Lighthouse e DevTools com limitação de rede | MVP |
| RNF02 | Tempo real | Uma alteração do organizador fica visível aos observadores em até 5 s, em conexão normal *(a validar)* | Teste com dois aparelhos, com cronômetro | MVP |
| RNF03 | Usabilidade | Um organizador novo cria um campeonato e gera a chave em até 2 min, sem ajuda *(a validar)*, e o sistema atinge SUS de pelo menos 68 | Teste com usuários reais da orla e questionário SUS | MVP |
| RNF04 | Usabilidade | As ações principais ficam a no máximo 3 toques da tela inicial *(a validar)* | Contagem de toques nos testes de usabilidade | MVP |
| RNF05 | Acessibilidade | Contraste de pelo menos 4,5:1 no texto normal (WCAG 2.2, nível AA) e alvos de toque de pelo menos 44×44 px | WebAIM Contrast Checker e revisão das telas | MVP |
| RNF06 | Compatibilidade | Funciona no Chrome (Android), no Safari (iOS) e no desktop, a partir de 360 px de largura | Teste em aparelhos reais | MVP |
| RNF07 | Segurança | Row Level Security ativo em todas as tabelas, e nenhum organizador consegue alterar dados de outro | Testes de integração com dois usuários | MVP |
| RNF08 | Segurança | Nenhum segredo no repositório, toda entrada de dados validada e chave secreta nunca presente no código do navegador | Revisão do repositório e checklist OWASP | MVP |
| RNF09 | Privacidade (LGPD) | Consentimento explícito antes de usar geolocalização e de exibir telefone, coleta mínima de dados e base legal documentada | Revisão dos fluxos e dos textos de consentimento | MVP |
| RNF10 | Auditabilidade | Um usuário comum não consegue alterar nem apagar registros de log | Tentativa de alteração negada em teste | MVP |
| RNF11 | Confiabilidade | Sem conexão, o app instalado abre e mostra a última chave carregada | Teste em modo avião | MVP |
| RNF12 | Manutenibilidade | Regras de chaveamento cobertas por testes unitários, código em camadas e commits no padrão Conventional Commits | Execução dos testes e revisão do histórico | MVP |

---

## 5. Rastreabilidade

Preencher com os objetivos do TCC. Cada requisito deve servir a pelo menos um objetivo. Requisito sem objetivo deve ser removido ou justificado.

| Objetivo do TCC | Requisitos relacionados |
|---|---|
| OE1: Desenvolver o gerador de chaves eliminatórias | RF02 a RF05, RNF12 |
| OE2: Permitir a conexão entre atletas avulsos e organizadores | RF10 a RF13 |

---

## 6. Decisões em aberto

| # | Decisão | Suposição adotada neste rascunho | Impacto |
|---|---|---|---|
| 1 | Geolocalização no MVP (RF12) | GPS opcional, com consentimento, e filtro por cidade ou praia como alternativa. Ambos no MVP | Esforço de implementação e carga de LGPD |
| 2 | Lançamento de resultado offline (RF16) | Desejável. No MVP o app só exibe a última chave carregada (RNF11) | Complexidade da fila de sincronização |
| 3 | Chave privada | Visível apenas ao organizador. Acesso por link secreto ainda a definir | Regras de acesso no banco |
| 4 | LGPD x auditoria (RF14 x RNF10) | O log guarda apenas um identificador anonimizado, e a decisão será registrada em um ADR | Modelo de dados do log |
| 5 | Prazo do TCC | Junho de 2027 *(confirmar)* | Escopo do MVP |
| 6 | Metas numéricas dos RNF02, RNF03 e RNF04 | Propostas iniciais | Serão validadas ou ajustadas nos testes de usabilidade |

---

## 7. Referências

- Ficha de decisão de arquitetura: [ADR 0001](adr/0001-stack-choice.md).
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/
- Google. *Web Vitals*. https://web.dev/articles/vitals
- BRASIL. *Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais)*. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- OWASP. *OWASP Top 10*. https://owasp.org/www-project-top-ten/
- BROOKE, J. SUS: a quick and dirty usability scale, 1996.