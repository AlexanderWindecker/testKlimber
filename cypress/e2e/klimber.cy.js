import { Page } from "../support/pages/klimber.page";
import occupations from "../fixtures/occupations.json";
const formatCurrency = (amount) => {
  return `$ ${new Intl.NumberFormat("es-AR").format(amount)}`;
};
describe("Kimbler", () => {
  beforeEach(() => {
    cy.viewport(1080, 720);
    cy.visit(
      "https://vitality-testing.klimber.com/ar/AP_Journey/Index?journeyId=aefffc29-c366-4dc7-b244-584c153063e8"
    );
    cy.url().should("contain", "vitality-testing.klimber");
  });
  it("Validación del flujo de cotización de seguro con cobertura y estados", () => {
    const totalOccupations = Cypress._.random(0, occupations.length - 1);
    const randomOccupations = occupations[totalOccupations];
    const name = "Tester";
    const num = Cypress._.random()

    Page.enterName(name);
    Page.nameInput().should("have.value", name);
    Page.botonContinue().click();
    Page.Ocupation()
    Page.resultOccupations().should("have.lengthOf", 391);
    Page.resultOccupations().contains(randomOccupations).click()
    Page.containerOccupations().should(
      "contain",
      randomOccupations
    );
    Page.botonStepOne().click();
    Page.selectCoverage(num)
    Page.day().click();
    Page.botonStepThree().click()
    Page.selectHealth(num)
    Page.state()    
    Page.stateResult().should("have.lengthOf", 23);
    Page.selectState(num)
    Page.botonStepFive().click()
    Page.addPhone()
    Page.botonStepSix().click()
    cy.intercept(
      "POST",
      "https://vitality-testing.klimber.com/ar/AP_Journey/RequoteVitalityLife"
    ).as("vitalityLife");
    cy.get('[role="slider"]:not([class*="hide"])').move({
      deltaX: 100,
      deltaY: 100,
    });
    // validations
    cy.wait("@vitalityLife").its("response.statusCode").should("eq", 200);
    Page.nameUser().should("have.text", name);
    Page.nameSure().should("contain", randomOccupations);
    cy.wait("@vitalityLife").then((response) => {
      expect(response.response.statusCode).to.eq(200);
      const formattedValue = formatCurrency(
        response.response.body.data.coverageAmountLife
      );

      Page.aseguranceTotal().should("have.text", formattedValue);
      
    });
  });
});
