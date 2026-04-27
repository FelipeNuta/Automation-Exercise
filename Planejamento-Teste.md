# Planejamento de Testes - Automação Cypress (QA Sênior)

## 1. Objetivo

Garantir a qualidade funcional do sistema Automation Exercise, validando fluxos críticos de negócio através de testes automatizados E2E e de API utilizando Cypress.

---

## 2. Escopo

### Funcionalidades cobertas:

* Cadastro de usuário
* Login (válido e inválido)
* Navegação de produtos
* Adição ao carrinho
* Checkout
* Validações de erro
* Testes de API (quando aplicável)

### Fora do escopo:

* Testes de performance
* Testes de segurança avançados
* Testes cross-browser complexos

---

## 3. Estratégia de Testes

### Tipos de teste:

* Testes E2E (fluxos principais)
* Testes de API (validação de contratos e status)
* Testes negativos (validação de erros)
* Testes com dados dinâmicos

### Abordagem:

* Automação baseada em Page Object (ou commands customizados)
* Uso de fixtures para dados mockados
* Interceptação de requisições com `cy.intercept`

---

## 4. Critérios de Entrada

* Ambiente disponível e acessível
* Massa de dados definida (usuários válidos e inválidos)
* Cypress configurado corretamente

---

## 5. Critérios de Saída

* Todos os testes críticos executados
* Taxa de sucesso aceitável (> 90%)
* Bugs críticos reportados

---

## 6. Cenários de Teste

### Login

* Login com credenciais válidas
* Login com credenciais inválidas
* Login com campos vazios

### Cadastro

* Cadastro com dados válidos
* Cadastro com e-mail já existente
* Validação de campos obrigatórios

### Carrinho

* Adicionar produto ao carrinho
* Remover produto
* Validar total da compra

### Checkout

* Finalizar compra com sucesso
* Validar erros de preenchimento

---

## 7. Dados de Teste

* Usuários fixos (fixture)
* Usuários dinâmicos (gerados em tempo de execução)
* Produtos existentes na base

---

## 8. Riscos

* Instabilidade do ambiente
* Dados inconsistentes
* Mudanças na interface sem aviso

---

## 9. Ferramentas

* Cypress
* Node.js
* Git
* CI/CD (GitHub Actions)

---

## 10. Boas Práticas Aplicadas

* Reutilização de código (commands)
* Separação de responsabilidades
* Testes independentes
* Assertions claras e objetivas

---

## 11. Métricas

* Taxa de sucesso dos testes
* Número de falhas por execução
* Tempo médio de execução

---

## 12. Observações Finais

O foco da automação não é apenas validar fluxo feliz, mas identificar falhas, comportamentos inesperados e garantir estabilidade do sistema sob diferentes condições.
