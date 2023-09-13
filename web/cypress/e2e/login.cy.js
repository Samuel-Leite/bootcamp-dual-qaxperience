import users from "../fixtures/users.json";
import loginPage from "../support/pages/LoginPage";
import studentPage from "../support/pages/StudentPage";

describe("Login ao healthxp", () => {
  it("O admin deve logar com sucesso", function () {
    const user = users.admin;

    loginPage.doLogin(user);
    studentPage.navbar.userLoggedIn(user.name);
  });

  it("O admin não deve logar com senha incorreta", () => {
    const user = users.inv_pass;

    loginPage.doLogin(user);
    loginPage.popUp.haveText(
      "Suas credenciais são inválidas, por favor tente novamente!"
    );
  });

  it("O admin não deve logar com e-mail inexistente", () => {
    const user = users.email_not_found;

    loginPage.doLogin(user);
    loginPage.popUp.haveText(
      "Suas credenciais são inválidas, por favor tente novamente!"
    );
  });

  it("O admin não deve logar com e-mails incorretos", () => {
    const emails = users.inv_emails;

    let outputMessages = [];
    let expectedMessages = [];

    loginPage.go();

    emails.forEach((u) => {
      loginPage.fill(u);
      loginPage.submit();

      loginPage
        .popUp
        .content()
        .invoke("text")
        .then((t) => {
          cy.log(t);
          outputMessages.push(t);
          expectedMessages.push("Insira um email válido.");
        });

      loginPage.popUp.back();
    });

    cy.wrap(outputMessages).should("deep.equal", expectedMessages);
  });

  it("O admin não deve logar com o campo e-mail vazio", () => {
    const user = users.empty_email;

    loginPage.doLogin(user);
    loginPage.popUp.haveText("Os campos email e senha são obrigatórios.");
  });

  it("O admin não deve logar com o campo senha vazio", () => {
    const user = users.empty_pass;

    loginPage.doLogin(user);
    loginPage.popUp.haveText("Os campos email e senha são obrigatórios.");
  });
});
