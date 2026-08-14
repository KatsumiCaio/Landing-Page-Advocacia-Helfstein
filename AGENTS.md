# Diretrizes de Desenvolvimento e Governança do Projeto (AGENTS.md)

Este documento estabelece o padrão obrigatório de fluxo de trabalho para qualquer agente ou desenvolvedor atuando neste projeto.

---

## 1. Gestão de Tarefas e Issues

Toda e qualquer alteração, implementação ou ajuste deve ser mapeada em uma **Issue** no GitHub antes ou durante a execução, devidamente categorizada em uma das três tipologias:

### Tipologias Obrigatórias:
1. **[Correção]** (Bug / Fix): Resolução de falhas, erros de compilação, bugs visuais, links quebrados ou comportamentos divergentes do esperado.
2. **[Melhoria]** (Enhancement / Refactor / Performance): Otimizações de layout, aprimoramento de acessibilidade, refinamento de performance, reestruturação de código ou atualização de conteúdo existente.
3. **[Nova função]** (Feature): Criação de novas seções, novos componentes, fluxos de agendamento adicionais, integrações com novas APIs ou novas capacidades do sistema.

---

## 2. Fluxo de Pull Requests (PRs) e Deploys

Todas as entregas, evoluções e deploys devem ser gerenciados através de **Pull Requests (PRs)**.

### Estrutura Obrigatória de Todo Pull Request:

Cada Pull Request deve conter impreterivelmente na sua descrição:

```markdown
## Issue Relacionada
- Ref: #[Número_da_Issue] (ex: Closes #12 ou Relacionado a #12)
- Categoria: [Correção | Melhoria | Nova função]

## O que mudou?
- Descrição clara, objetiva e em tópicos das alterações implementadas no código.

## Como foi validado?
- Detalhamento dos testes e checagens executadas (ex: `npm run lint`, `npm run build`, validação de responsividade mobile/desktop, testes de clique e navegação).

## Riscos, Limitações e Próximos Passos
- **Riscos identificados:** Possíveis impactos em outras áreas ou dependências.
- **Limitações:** O que não foi coberto nesta entrega ou restrições conhecidas.
- **Próximos passos:** Ações futuras recomendadas ou tarefas subsequentes.
```

---

## 3. Padrão de Validação Contínua
Antes de submeter ou finalizar qualquer entrega:
- Execute a checagem de tipos e linter (`lint_applet` / `npm run lint`).
- Execute a compilação completa da aplicação (`compile_applet` / `npm run build`).
- Garanta a aderência às diretrizes de UI (tema Sleek Interface / Dark & Gold, contraste, responsividade mobile).
