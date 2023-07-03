/// <reference types="cypress" />
import * as loginPage from "../pages/loginpage";
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//Elements object

// -- This is a parent command --
 Cypress.Commands.add('login', (user: string , password:string) => { 
    cy.launch();
        cy.get(loginPage.elements.userInput).type(user);
        cy.wait(1000);
        cy.get(loginPage.elements.pwdInput).type(password);
        cy.wait(1000);
        cy.get(loginPage.elements.loginBtn).click();   
 });
 Cypress.Commands.add('launch',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.wait(2000);
 });
 Cypress.Commands.add('logout',()=>{
   // Action
   cy.get(loginPage.elements.dropDown).click();
   cy.wait(2000);
   cy.xpath(loginPage.elements.logoutBtn).click();
   cy.wait(3000);
   // Verification
   cy.contains('Login').should('be.visible');
 });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
 /*declare global {
  namespace Cypress {
     interface Chainable {
      login(email: string, password: string): Chainable<void>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
 }*/