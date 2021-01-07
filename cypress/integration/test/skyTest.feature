Feature: Check Webpage displays correct elements
 I want to ensure the skynews.com website displays correctly

 Scenario: Browser Tab Title Displays Correct Title (Test A)
 Given I have navigated to the Sky News Home page
 Then the browser tab title should display "The Latest News from the UK and Around the World | Sky News"

 Scenario: Correct New Categories should be displayed on homepage (Test B)
 Given I have navigated to the Sky News Home page
 Then the following cateories should be displayed
    |  newsCategory | 
    | Home |
    | UK |
    | World |
    | Politics |
    | US |
    | Climate |
    | Science & Tech |
    | Business |
    | Ents & Arts |
    | Travel |
    | Offbeat |
And all 15 categories should be available

Scenario: Home Category is a the default focus when navigating to Sky New Webpage (Test C)
 Given I have navigated to the Sky News Home page
 Then the "Home" Category is the default focus category

Scenario: When Clicking a new news category it becomes the default focus (Test D)
 Given I have navigated to the Sky News Home page
 And the Home Category is the default focus category
 When I click on "Climate"
 Then the "Climate" Category is the default focus category

 Scenario: Tab Title matches Article Title (Test E)
 Given I have navigated to the Sky News Home page
 When I navigate to a new Article
 Then the browser tab title matches the article headline

