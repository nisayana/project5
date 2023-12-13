const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const { default: Pagination } = require("../../../pages/Pagination");

const paginationPage = new Pagination();

Given(/^the user is on "([^"]*)"$/, (url) => {
    cy.visit(url)
});


Then(/^the user should see the "([^"]*)" heading$/, (text) => {
    switch (text) {
        case "Pagination":
            paginationPage.getHeading().should("have.text", text)
            break
        case "World City Populations 2022":
            paginationPage.getSubheading().should("have.text", text)
    }
});


Then(/^the user should see the "([^"]*)" paragraph$/, (paragraph) => {
	paginationPage.getParagraph().should("have.text", paragraph)
});


Then(/^the user should see the "([^"]*)" button is disabled$/, (btn) => {
    switch (btn) {
        case "Next": 
            paginationPage.getNextBtn().should("not.be.enabled")
            break
        case "Previous":
            paginationPage.getPrevBtn().should("not.be.enabled")
            break
    }
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (btn) => {
	switch (btn) {
        case "Next": 
            paginationPage.getNextBtn().should("be.enabled")
            break
        case "Previous":
            paginationPage.getPrevBtn().should("be.enabled")
            break
    }
});


When(/^the user clicks on the "([^"]*)" button$/, (btn) => {
	paginationPage.getNextBtn().click()
});


When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (btn) => {
	paginationPage.getNextBtn().click().click().click()
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
	const arr = dataTable.rawTable.flat()
    
	paginationPage.getCityInfo().each(($el, index) => {
		cy.wrap($el.text()).should("eq", arr[index])
	})
});














