describe('Bill payment form', () => {
    before(function() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('[name=username]')
            .type(Cypress.env('login'))
            .should('have.value', Cypress.env('login'))  

        cy.get('[name=password]')
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'))    

        cy.get('[type=submit]').click()
        cy.url().should('include', '/overview.htm')

    })


    it('should load form', () => {
        cy.get('a[href*="/parabank/billpay.htm"]').click()
        cy.url().should('include', '/billpay.htm')
        cy.get('table[class=form2]').should('be.visible')

    })

    it('should fill form', () => {
        cy.get('input[name="payee.name"]')
            .type(Cypress.env('payee.name'))
            .should('have.value', Cypress.env('payee.name'))
        
        cy.get('input[name="payee.address.street"]')
            .type(Cypress.env('payee.address.street'))
            .should('have.value', Cypress.env('payee.address.street'))  

        cy.get('input[name="payee.address.city"]')
            .type(Cypress.env('payee.address.city'))
            .should('have.value', Cypress.env('payee.address.city'))

        cy.get('input[name="payee.address.state"]')
            .type(Cypress.env('payee.address.state'))
            .should('have.value', Cypress.env('payee.address.state'))

        cy.get('input[name="payee.address.zipCode"]')
            .type(Cypress.env('payee.address.zipCode'))
            .should('have.value', Cypress.env('payee.address.zipCode'))

        cy.get('input[name="payee.phoneNumber"]')
            .type(Cypress.env('payee.phoneNumber'))
            .should('have.value', Cypress.env('payee.phoneNumber'))

        cy.get('input[name="payee.accountNumber"]')
            .type(Cypress.env('payee.accountNumber'))
            .should('have.value', Cypress.env('payee.accountNumber'))

        cy.get('input[name="verifyAccount"]')
            .type(Cypress.env('payee.accountNumber'))
            .should('have.value', Cypress.env('payee.accountNumber'))

        cy.get('input[name="amount"]')
            .type(Cypress.env('sum'))
            .should('have.value', Cypress.env('sum'))

      
    })
    
    it('should submit bill payment form', () => {
        cy.get('[type=submit]').click()
    })
  
    it('should display feedback message', () => {
        cy.get('.title').should('include.text', 'Bill Payment Complete')
        cy.get('#amount').should('include.text', '$' + Cypress.env('sum') + '.00')
        cy.get('p').should('include.text', 'successful')
    
    })


})