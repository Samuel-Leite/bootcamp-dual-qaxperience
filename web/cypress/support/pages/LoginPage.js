import popUp from './components/PopUp'

class LoginPage {

  constructor(){
    this.popUp = popUp
  }

  go() {
    cy.visit("/");
  }

  fill(user) {

    cy.get("#email").clear().as('email')
    cy.get("#password").clear().as('password')

    user.email ? cy.get("@email").type(user.email) : cy.log('empty email')
    user.password ? cy.get("@password").type(user.password) : cy.log('empty password')
  }

  submit() {
    cy.contains("button", "Entrar").click();
  }

  doLogin(user) {
    this.go();
    this.fill(user);
    this.submit();
  }
}

export default new LoginPage();
