class Pagination {
    getHeading() {
        return cy.get(".is-size-3")
    }

    getSubheading() {
        return cy.get("#sub_heading")
    }

    getParagraph() {
        return cy.get("#content")
    }

    getPrevBtn() {
        return cy.get("#previous")
    }

    getNextBtn() {
        return cy.get("#next")
    }

    getCityInfo() {
        return cy.get(".city_info")
    }
}

export default Pagination;