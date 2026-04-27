export class CadastroPage {

    selecionarTitulo() {
        cy.get('#id_gender1').check().should('be.checked')
    }

    validarNomeEmail(name, email) {
        cy.get('[data-qa="name"]').should('have.value', name)
        cy.get('[data-qa="email"]').should('have.value', email)
    }

    preencherSenha(password) {
        if (password) {
            cy.get('[data-qa="password"]').type(password, { log: false })
        }
    }

    preencherDataNascimento(birthday) {
        const [day, month, year] = birthday.split('/')
        const monthFormatted = String(Number(month))

        cy.get('[data-qa="days"]').select(day)
        cy.get('[data-qa="months"]').select(monthFormatted)
        cy.get('[data-qa="years"]').select(year)
    }

    selecionarPreferencias() {
        cy.get('#newsletter').check()
        cy.get('#optin').check()
    }

    preencherEndereco(dados) {
        cy.get('[data-qa="first_name"]').type(dados.name)
        preencherCampo('[data-qa="last_name"]', dados.lastName)
        cy.get('[data-qa="company"]').type(dados.company)
        preencherCampo('[data-qa="address"]', dados.adress)
        cy.get('[data-qa="address2"]').type(dados.adress2)
        cy.get('[data-qa="country"]').select(dados.country)
        preencherCampo('[data-qa="state"]', dados.state)
        preencherCampo('[data-qa="city"]', dados.city)
        preencherCampo('[data-qa="zipcode"]', dados.zipcode)
        preencherCampo('[data-qa="mobile_number"]', dados.mobile)
    }

    submeter() {
        cy.get('[data-qa="create-account"]').click()
    }

    preencherFormularioCompleto(dados) {

        const user = Cypress.env('users')[dados.userkey]

        if (!user) {
            throw new Error(`User não encontrado: ${dados.userkey}`)
        }

        this.selecionarTitulo()
        this.validarNomeEmail(dados.name, dados.email)
        this.preencherSenha(user.password)
        this.preencherDataNascimento(dados.birthday)
        this.selecionarPreferencias()
        this.preencherEndereco(dados)
        this.submeter()
    }
}

function preencherCampo(selector, valor) {
    if (valor === undefined) return

    cy.get(selector).clear()

    if (valor !== '') {
        cy.get(selector).type(valor)
    }
}

