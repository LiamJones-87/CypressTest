# CypressTest
Technical Test

# System Requirements
1. Node.js
2. Visual Studio Code (or other IDE)
3. Git

# Installation
1. Clone repo
2. npm install
3. ONLY RUN IF THE NEXT STEPS FAIL - npm install cypress --save-dev

# Running the tests
*Via GUI*
1. cd within the repo 
2. npx cypress open
3. click on the feature file

*Via command line*
1. npx cypress run --headless --browser chrome --spec "cypress/integration/test/*.feature"
