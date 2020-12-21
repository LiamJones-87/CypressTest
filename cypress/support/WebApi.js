//Api Request to check registration email hits DB and ColId is creted
Cypress.Commands.add("WebApiCheckEmail", (email) => {

    cy.request({
        url: Cypress.env('WebApiGetColid') + email + '/',
        method: 'GET'
    }).then(emailResponse => {
        expect(emailResponse.status).to.equal(200);
        expect(emailResponse.body).to.have.property('PrimaryEmail', email)
        expect(emailResponse.body.ColId).to.not.equal(null);
    })
});