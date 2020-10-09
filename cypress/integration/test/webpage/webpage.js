Given('I have navigated to the website', () => {
    
   
    cy.visit('/')
    //XHR
    //cy.server()
    //cy.route("/customer1.json").as("customer1")
    //cy.wait('@customer1')    

    //Fetch
    cy.wait(5000).log('I belive you are using fetch here, currently Cypress cannot handle fetch calls')
});

When('I click on the button to view {string} details', (getButton)  => {

    cy.log(getButton)
    //Setting Customer name as a variable to compare against the passed value from the BDD
    const JS = 'John Smith'
    const JB = 'Jeff Bridges'
    const SJ = 'Steve Jones'

    //Compares Variables, and clicks specific button based on comparision 
    if (getButton == JS) {
        cy.get('[data-test="1"]').click()
    }
    else if (getButton == JB) {  
        cy.get('[data-test="2"]').click()
    }
    else if (getButton == SJ) {
        cy.get('[data-test="3"]').click()
    }

});

//Not Used - written to create a single stepDef for the 1 Customer
When('I Click to view John Smiths details', () => {
    cy.get('[data-test="1"]').click()

})

//Not Used - written to create a single stepDef for the 1 Customer
When('I Click to view Jeff Bridges details', () => {
    cy.get('[data-test="2"]').click()
    
})

//Not Used - written to create a single stepDef for the 1 Customer
When('I Click to view Steve Jones details', () => {
    cy.get('[data-test="3"]').click()
    
})

Then("I'm displayed the correct information", (datatable) => {

    //Using values from the datatables in the DBB
    datatable.hashes().forEach(element => {
    cy.get('[class="customerdetails"]')
    .should('contain', element.Name)
    .should('contain', element.Email)
    .should('contain', element.Phone)
    .should('contain', element.City)
    .should('contain', element.State)
    .should('contain', element.Country)
    .should('contain', element.Organization)
    .should('contain', element.JobProfile)
    .should('contain', element.AdditionalInformation)
           
    });
    
});

Then('The Page Displays Correctly', () => {

    //Checking Elements exist on page
    cy.url('eq','https://9a2cdb3e.azurewebsites.net/customerlist');
    cy.get('[class="App-title"]')
    .should('contain', 'Selenium Test');
    cy.get('[class="addmargin"]')
    .should('exist');
    cy.get('[class="customerdetails"]')
    .should('exist');

})