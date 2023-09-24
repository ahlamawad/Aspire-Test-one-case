
/// <reference types="Cypress" />

const expectedCurrency = "SAR"
const expectedAttr ="lang"
const expectedLang = "ar"
describe('aspire test cases', () => {
  it('test the currency is SAR', () => {
    cy.visit('https://ae.almosafer.com/en')

    cy.get('[data-testid="Header__CurrencySelector"]').invoke("text").should("include",expectedCurrency);
  }) 

it('test the web languge en', () => {

  cy.visit('https://ae.almosafer.com/en')
  cy.get('html').should("have.attr","lang","en")
})

it('test the web languge ar', () => {

  cy.visit('https://ae.almosafer.com/ar')
  cy.get('html').should("have.attr",expectedAttr,expectedLang)
})

})