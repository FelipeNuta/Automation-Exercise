import { SignupPage } from '../pages/SignupPage'
import { CadastroPage } from '../pages/CadastroPage'
import { gerarEmailAleatorio } from './utils'
import { validarResultado } from './utils'

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('cadastrarUsuario', (cenario) => {

    const email = cenario.email || gerarEmailAleatorio()

    const signupPage = new SignupPage()
    const cadastroPage = new CadastroPage()
    
    cy.intercept('GET', '**/account_created').as('createAccount')

    signupPage.preencherSingup({
        name: cenario.name,
        email
    })

    cy.wrap(email).as('emailGerado')

    if (cenario.fluxo === 'completo') {
        cadastroPage.preencherFormularioCompleto({
            ...cenario,
            email
        })
    }

})

Cypress.Commands.add('validarCadastro', (expected, contexto = {}) => {

    if (!expected || !expected.tipo) {
        throw new Error('Expected mal definido')
    }

    if (expected.tipo === 'sucesso') {
        cy.wait('@createAccount').its('response.statusCode').should('eq', 200)
    }

    // chama os validadores já existentes
    validarResultado(expected, contexto)
})

Cypress.Commands.add('criarUsuarioAPI', (usuario) => {

    return cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
            name: usuario.name,
            email: usuario.email,
            password: usuario.password,
            firstname: usuario.name,
            lastname: usuario.lastName,
            address: usuario.adress,
            country: usuario.country,
            state: usuario.state,
            city: usuario.city,
            zipcode: usuario.zipcode,
            mobile_number: usuario.mobile
        }
    })
})  