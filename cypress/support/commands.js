// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//Student Portal Login

Cypress.Commands.add('StudentPortalLogin', (email, password) => {

    cy.visit(Cypress.env('StudentPortal'))

        cy.get('[id="txtUsername"]').type(email)
        cy.get('[id="txtPassword"]').type(password)
        cy.get('[id="btnLogin"]').click()

  })
  //API Request to query the WebApi to check the Gender of Student
  //Use the following in the Test: cy.CheckGender ('<Add Gender Valu here: M/F/O>')
  Cypress.Commands.add('CheckGender', (gender) => {
    cy.request({
        method: 'GET',
        url: 'http://GD-D-AS1-CC/rest/ulaw/api/v1/contact/email/ms_edun@outlook.com/', //Environment Vairable set in cypress.env.json
       
        
      }).then( response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('Gender', gender)
    
    })
  })


//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//MSAD Authentication
// Cypress.Commands.add("msadLogin", () => {
//     cy.request({
//       method: "POST",
//       url: `https://login.microsoftonline.com/${Cypress.config(
//         "tenantId"
//       )}/oauth2/token`,
//       form: true,
//       body: {
//         grant_type: "client_credentials",
//         client_id: Cypress.config("clientId"),
//         client_secret: Cypress.config("clientSecret"),
//         resource: Cypress.config("clientId"),
//       },
//     }).then((response) => {
//       const ADALToken = response.body.access_token;
//       const expiresOn = response.body.expires_on;
  
//       localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}|`);
//       localStorage.setItem(
//         `adal.access.token.key${Cypress.config("clientId")}`,
//         ADALToken
//       );
//       localStorage.setItem(
//         `adal.expiration.key${Cypress.config("clientId")}`,
//         expiresOn
//       );
//       localStorage.setItem("adal.idtoken", ADALToken);
//     });
//   });