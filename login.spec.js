describe('Login and Log out', () => {
  it('should login', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

  // Enter your account
  cy.get('[name=username]')
    .type(Cypress.env('login'))
    .should('have.value', Cypress.env('login'))  

  cy.get('[name=password]')
    .type(Cypress.env('password'))
    .should('have.value', Cypress.env('password'))    

  cy.get('[type=submit]').click()
  cy.url().should('include', '/overview.htm')
  cy.get('h2').should('include.text', 'Account Services')
  
  })

  it('should log out', () => {
    cy.get('a[href*="/parabank/logout.htm"]').click()
    cy.get('h2').should('include.text', 'Customer Login')

  })  
})
