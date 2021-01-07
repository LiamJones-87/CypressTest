let cookies = 0

const getIframeDocument = () => {
    return cy
    .get('iframe[id="sp_message_iframe_368417"]')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
  }


Given('I have navigated to the Sky News Home page', () => {

    cy.clearCookies()
    cy.visit('www.skynews.com')
      //.then((cookies)
      //if (cookies = 0 ) {
      getIframeBody().find('[aria-label="Accept"]').should('have.text', 'Accept').click()
      //let cookies = 1
      //} else {
      //}

      //})
    
    //cy.get('#iframe-id')
    //.iframe('body #elementToFind')
    //.should('exist')

})

And ('the Home Category is the default focus category', () => {

  cy.get('[id="nav-wrap"]').find('[aria-current="true"]').should('contain', 'Home')

});

When ('I click on {string}', (category) => {

  cy.get('[id="nav-wrap"]').contains(category).click()

});

When ('I navigate to a new Article', () => {

    cy.get('[class="sdc-site-tile__headline-link"]').first().click()

})



Then('the browser tab title should display {string}', (title) => {

    cy.title().should('eq', title);

})

Then ('the browser tab title matches the article headline', () => {

    let firstWord;

    cy.get('[class="sdc-article-header__main"]')
      .find('[class="sdc-article-header__long-title"]')
      .then(($text) => {
    // save text from the first element
    const text = $text.text();
    const indexOfSpace = text.indexOf(" ");
    firstWord = $text.text().substring(0, indexOfSpace)
  });

    cy.title()
      .then(($title) => {
      expect($title).to.contain(firstWord);

  });

})

Then ('the following cateories should be displayed', (datatable) => {

  //Using values from the datatables in the DBB
  datatable.hashes().forEach(element => {
    cy.get('[id="nav-wrap"]')
    .should('contain', element.newsCategory)
    });


})

Then ('the {string} Category is the default focus category', (categoryFocus) => {

  cy.get('[id="nav-wrap"]').find('[aria-current="true"]').should('contain', categoryFocus)

});

And ('the following categories are displayed under the more menu', (datatable) => {

  //Using values from the datatables in the DBB
  datatable.hashes().forEach(element => {
    cy.get('[data-type="overflow"')
    .should('contain', element.moreMenu)
    cy.get('.sdc-site-header__menu-item').should('have.css', 'visibility', 'hidden')
  });

  });

And ('all 15 categories should be available', () => {

    cy.get('[data-role="main-nav-item"]').should('have.length', 15)
    //there are 15 categories. however, 4 are hidden/under More.
})