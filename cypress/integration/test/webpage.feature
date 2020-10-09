Feature: Check Customer Details
 I want to ensure customer details are correct

Scenario: Check Page Displays Elements
Given I have navigated to the website
Then The Page Displays Correctly

Scenario: Check John Smiths Details Are Correct
    Given I have navigated to the website
    When I click on the button to view "John Smith" details
    Then I'm displayed the correct information
        | Name | Email | Phone | City | State | Country | Organization | JobProfile | AdditionalInformation |
        | John Smith | jsmith@test.com | 0208092029 | London | Greater London | England | Company 1 | Software Developer | Has Bought a lot of products before and a high Value Customer |
        
Scenario: Check Jeff Bridges Details Are Correct
    Given I have navigated to the website
    When I click on the button to view "Jeff Bridges" details
    Then I'm displayed the correct information
        | Name | Email | Phone | City | State | Country | Organization | JobProfile | AdditionalInformation |
        | Jeff Bridges | abcd@test.com| 0161 225 7632 | Manchester | Greater Manchester | England | Company 2 | Software Developer | Buys Products Rarely |

Scenario: Check Steve Jones Details Are Correct
    Given I have navigated to the website
    When I click on the button to view "Steve Jones" details
    Then I'm displayed the correct information
        | Name | Email | Phone | City | State | Country | Organization | JobProfile | AdditionalInformation |
        | Steve Jones | steven.jones@test.com | 01403 215100 | Horsham | West Sussex | England | Company 3 | Software Developer | Buys Lots of Products in general |