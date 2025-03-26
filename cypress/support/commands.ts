/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      
      escribir(selector: string, dato: string): Chainable,
      makeClick(selector: string): Chainable,
      productClick (firstSelector:string,secondSelector:string):Chainable
    }
  }

 Cypress.Commands.add('escribir', (selector:string, dato:string) => {
    cy.get(selector).type(dato)
  })
  Cypress.Commands.add('makeClick', (selector:string) => {
    cy.get(selector).click()
  })
  
  Cypress.Commands.add('productClick', (firstSelector:string,secondSelector:string) => {
    cy.get(firstSelector).first().find(secondSelector).click()
  })
  
 

 