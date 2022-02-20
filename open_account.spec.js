describe('Open new account', () => {
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

    cy.wait(2000)

  })
  

    // Open a new account 
  it('should load the form', () => {
    cy.get('a[href*="/parabank/openaccount.htm"]').click()
    cy.url().should('include', '/openaccount.htm')
    cy.get('.ng-scope').should('be.visible')

  })  

  it('should choose values', () => {
    cy.get('select[id="type"]').select('SAVINGS').should('have.value', '1')
    cy.get('select[id="fromAccountId"]').select('12789').should('have.value', '12789')

  })    

  it('should submit the form', () => {
    cy.get('[type=submit]').click()
  })  
    

  it('should display feedback message', () => {
    cy.get('body').should('include.text', 'Your new account number:')
  })
    

  
})

