/// <reference types="cypress" />

describe('Bulb Test', () => {

    it('Test intercept', () => {

        //cy.intercept('/t').as('tacking')

        cy.visit('https://calculator.bulb.co.uk/questions/transport')

        //cy.wait(['@tracking'])

        //cy.get('[id="ThisChangesOnReleaod').type('Post Code')

        //cy.get('form').eq(0).submit()

        cy.contains('Car').click()

    })
})