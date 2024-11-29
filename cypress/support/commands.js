beforeEach(() => {
	Cypress.on('uncaught:exception', () => false);
	cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});