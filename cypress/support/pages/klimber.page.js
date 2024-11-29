class page {
  constructor() {
    this.nameInput = () => cy.get("#name");
    this.botonContinue = () => cy.get("#btn-step0");
    this.containerOccupations = () => cy.get('[id="select2-Occupation-container"]');
    this.resultOccupations = () => cy.get('[id^="select2-Occupation-result-"]');
    this.botonStepOne = () => cy.get("#btn-step1");
    this.Coverage = () => cy.get('[class="form-group"] [data-recommendation="recommendationRadioButton"]');
    this.day = () => cy.get('li[data-range-key="1 día"]');
    this.botonStepThree = () => cy.get("#btn-step3");
    this.healthCoverage = () => cy.get('[id^="HealthCoverage"]');
    this.stateContainer = () => cy.get('[id="select2-state-container"]');
    this.stateResult = () => cy.get('[id^="select2-state-result-"]');
    this.botonStepFive = () => cy.get("#btn-step5");
    this.inputPhone = () => cy.get('input[id="phone"]');
    this.botonStepSix= () => cy.get("#btn-step6");
    this.nameUser= () => cy.get('[class="nombreUsuario"]');
    this.nameSure= () => cy.get('[class="nombreSeguro"]');
    this.aseguranceTotal= () => cy.get('[id="suma_aseguradatotal"]');
  }

  enterName(name) {
    this.nameInput().type(name);
  }
  Ocupation() {
    this.containerOccupations().click();
  }
  selectCoverage(num){
    this.Coverage().eq(num).click()
  }
  selectHealth(num){
    this.healthCoverage().eq(num).click()
  }
  state(){
    this.stateContainer().click()
  }
  selectState(num){
    this.stateResult().eq(num).click()
  }
  addPhone(){
    this.inputPhone().type('1123456')
  }
}

export const Page = new page();
