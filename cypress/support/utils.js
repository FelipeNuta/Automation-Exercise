export function gerarEmailAleatorio() {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000)

    return `teste_${timestamp}_${random}@teste.com`

}

export function validarResultado(expected) {

    if (!expected || !expected.tipo) {
        throw new Error('Expected mal definido')
    }

    const validadores = {
        sucesso: () => {
            cy.get('[data-qa="account-created"]')
                .should('be.visible')
                .and('contain', 'Account Created!')
        },

        'email-existente': () => {
            cy.contains('Email Address already exist!')
                .should('be.visible')
        },

        'password-required': () => {
            cy.get('[data-qa="password"]').should('have.attr', 'required')
        },

        'aceita-numeros': () => {
            cy.get('[data-qa="account-created"]').then(($el) => {
                if ($el.length > 0) {
                    cy.log('BUG: sistema permitiu cadastro com números')
                }
            })
        },

        'tudo-maisculo': () => {
            cy.get('[data-qa="account-created"]').then(($el) => {
                if ($el.length > 0) {
                    cy.log('BUG: sistema permitiu cadastro com letras maiúsculas')
                }
            })
        },

        'zipcodes-mobile-alfanumericos': () => {
            cy.get('[data-qa="account-created"]').then(($el) => {
                if ($el.length > 0 ) {
                    cy.log('BUG: sistema permitiu cadastro com ZIPCODE e MOBILE alfanuméricos')
                }
            })
        },

        'campo-obrigatorio': () => {
            cy.get('[data-qa="create-account"]').click()

            cy.get('[data-qa="last_name"]').then(($input) => {
                expect($input[0].validationMessage).to.not.be.empty
            })
        },

        'caracter-especial': () => {
            cy.get('[data-qa="account-created"]').then(($el) => {
                if ($el.length > 0) {
                    cy.log('BUG: sistema permitiu cadastro com caracteres especiais')
                }
            })
        }
    }

    const validador = expected.tipo === 'sucesso'
        ? validadores.sucesso
        : validadores[expected.erro]

    if (!validador) {
        throw new Error(`Validador não encontrado: ${expected.erro}`)
    }

    validador()
}

