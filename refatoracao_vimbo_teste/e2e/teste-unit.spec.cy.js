describe('teste aut', () => {
  it('passes', () => {
    cy.visit('https://app-homologacao.smartweb.inf.br/')

    // acessar com conta master vimbo 
    cy.get('input[formControlName="usu_email"]')
    .type('sistema@vimbo.com.br')
    cy.get('input[formControlName="usu_senha"]')
    .type('Arp@!135')
    cy.get('button[aria-label="LOGIN"]')
    .click()

    // clicar no menu
    cy.get('mat-icon[svgicon="vb-icon-menu-open"]')
    .closest('button')
    .click()

// abrir o menu de vendas e negociações 
   cy.contains('span.nav-link-title', 'Vendas')
   .click()
   cy.contains('a.nav-link', 'Negociações')
   .should('be.visible')
   .click()

// nova negociação 





  })
})
