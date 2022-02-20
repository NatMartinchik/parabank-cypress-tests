describe('Transfer funds', () => {
  before(function() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('[name=username]')
    .type(Cypress.env('login'))
    .should('have.value', Cypress.env('login'))  

    cy.get('[name=password]')
      .type(Cypress.env('password'))
      .should('have.value', Cypress.env('password'))    

    cy.get('[type=submit]').click()
    cy.wait(1000)
    cy.url().should('include', '/overview.htm')

  })


  // Go to Transfer funds 
  it('should go to transfer funds form', () => {
    cy.get('a[href*="/parabank/transfer.htm"]').click()
    cy.wait(1000)
    cy.url().should('include', '/transfer.htm')
    cy.get('select').should('be.visible')

  })
    

  // Fill in and submit the form
  it('should fill transfer form', () => {
       
    cy.get('#amount')
      .type(Cypress.env('sum'))
      .should('have.value', Cypress.env('sum'))
      


    cy.get('select[id="fromAccountId"]')
        .select('12789')
        .should('have.value', '12789')  

    cy.get('select[id="toAccountId"]')
        .select('12345')
        .should('have.value', '12345')

    })    

    it('should submit transfer form', () => {
    cy.get('[type=submit]').click()
    cy.wait(2000)
    
    })

    it('should display feedback message', () => {
    cy.get('.title').should('include.text', 'Transfer Complete!')
    cy.get('#amount').should('include.text', '$' + Cypress.env('sum') + '.00')
    

    })
})