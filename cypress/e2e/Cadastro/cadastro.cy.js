import { gerarEmailAleatorio, validarResultado } from '../../support/utils.js'
import { SignupPage } from '../../pages/SignupPage.js'
import { cenarios } from '../../data/dados_cadastro.js'
import { CadastroPage } from '../../pages/CadastroPage.js'


beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').click()
})

cenarios.forEach((cenario) => {

    it(`Cenario ${cenario.cenario}`, () => {

        cy.cadastrarUsuario(cenario)

        cy.get('@emailGerado').then((emailGerado) => {

            cy.validarCadastro(cenario.expected, {
                name: cenario.name,
                email: emailGerado
            })
        })
    })
})