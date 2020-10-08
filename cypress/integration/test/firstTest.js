/// <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('https://9a2cdb3e.azurewebsites.net/customerlist');
        cy.find('John Smith','button').click();

    })

})
