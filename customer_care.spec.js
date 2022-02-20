describe('Customer care form', () => {
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


    it('should load contact form', () => {
      cy.get('[class=contact]').click()
      cy.url().should('include', '/contact.htm')
      cy.get('form').should('be.visible')

    })

    it('should fill contact form', () => {
      cy.get('#name')
        .type(Cypress.env('name'))
        .should('have.value', Cypress.env('name'))  

      cy.get('#email')
        .type(Cypress.env('email'))
        .should('have.value', Cypress.env('email'))  

      cy.get('#phone')
        .type(Cypress.env('phone'))
        .should('have.value', Cypress.env('phone'))  

      cy.get('#message')
        .type('text')
        .should('have.value', 'text') 
    })
    
    it('should submit contact form', () => {
      cy.get('[type=submit]').click()
    })
  
    it('should display feedback message', () => {
      cy.get('h1').should('be.visible')
      cy.get('p').should('include.text','Thank you ' + Cypress.env('name'))
    })


})
