import navbar from "./components/Navbar";
import popUp from "./components/PopUp";
import notification from "./components/Notification"

class StudentPage {
  constructor() {
    this.navbar = navbar;
    this.popUp = popUp;
    this.notification = notification;
  }

  goToRegister() {
    cy.get('a[href="/students/new"]').click();
  }

  submitForm(student) {
    if(student.name) cy.get("input[name=name]").clear().type(student.name);
    if(student.email) cy.get("input[name=email]").clear().type(student.email);
    if(student.age) cy.get("input[name=age]").clear().type(student.age);
    if(student.weight) cy.get("input[name=weight]").clear().type(student.weight);
    if(student.feet_tall) cy.get("input[name=feet_tall]").clear().type(student.feet_tall);

    cy.contains("button", "Cadastrar").click();
  }

  requiredMessage(label, text){
    cy.contains('label', label).parent().find('span').should('have.text', text)
  }

  search(name) {
    cy.get('input[placeholder="Buscar por nome"]').type(name);
  }

  delete(email) {
    cy.contains("tr", email).find("button").click();
  }
}

export default new StudentPage();
