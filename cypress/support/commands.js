// Import Cypress XPath plugin
require('cypress-xpath');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('login', () => {
    cy.visit('https://v2.jubelio.com/auth/login'); 
    cy.get('#textfield-email').type('shabrina121199@gmail.com'); 
    cy.get('#textfield-password').type('Abcd1234@'); 
    cy.xpath("(//button[normalize-space()='Login'])[1]").click(); 
  });

  Cypress.Commands.add('setDesktopViewport', () => {
    cy.viewport(1280, 720); // Atur ukuran viewport ke desktop
  });