export class SignupPage {

    preencherSingup({ name, email }) {
        cy.get('[data-qa="signup-name"]').type(name)                                // NAME
        cy.get('[data-qa="signup-email"]').type(email)                              // EMAIL
        cy.get('[data-qa="signup-button"]').click()                                 // BOTAO SIGNUP
    }

}