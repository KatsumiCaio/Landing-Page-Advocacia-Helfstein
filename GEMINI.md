# Padrões e Instruções do Projeto (GEMINI.md)

Este repositório segue regras estritas de ciclo de vida de desenvolvimento, governança de código e entregas.

## Padrão de Issues
Qualquer tarefa a ser executada no projeto deve ser categorizada explicitamente como:
- **Correção** (Bugfix)
- **Melhoria** (Improvement / Refactoring)
- **Nova função** (New Feature)

## Padrão de Pull Requests
Todo deploy e entrega deve ser estruturado em formato de Pull Request contendo obrigatoriamente:
1. **Issue Relacionada**: Menção explícita à Issue correspondente.
2. **O que mudou**: Resumo detalhado das alterações.
3. **Como foi validado**: Métodos de teste, lint (`tsc --noEmit`), build (`vite build`) e verificações em runtime.
4. **Riscos, Limitações e Próximos Passos**: Avaliação de impacto colateral, limitações da solução e próximas etapas.
