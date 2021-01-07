// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//witch back to Feature File - Add to Cypress.json
//"testFiles": "**/*.feature",



Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
  Cypress.log({
    name: 'iframe',
    consoleProps() {
      return {
        iframe: $iframe,
      };
    },
  });
  return new Cypress.Promise(resolve => {
    resolve($iframe.contents().find(selector));
  });
});




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
