/// <reference types="cypress" />

describe('Bulb Test', () => {

    it('Test intercept', () => {

        cy.intercept('/t').as('tacking')

        cy.visit('www.bulb.co.uk')

        cy.wait(['@tracking'])

        cy.get('[id="ThisChangesOnReleaod').type('Post Code')

        cy.get('form').eq(0).submit()
        
    })
})