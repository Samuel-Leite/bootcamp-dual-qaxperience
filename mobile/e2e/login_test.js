const students = require("../fixtures/students.json");

Feature("Login no aplicativo mobile do HealthXP");

Scenario(
  "Deve realizar o login com sucesso",
  async ({ I, loginScreen, account }) => {
    const dataTest = students.success_login;

    I.resetStudent(dataTest.student);
    const enrollment_code = await I.createEnroll(dataTest);

    loginScreen.with(enrollment_code);
    account.userLoggedIn();
  }
);

Scenario(
  "Não deve realizar o login com matrícula inexistente",
  ({ I, loginScreen }) => {
    loginScreen.with("ABC123");
    I.popHaveText(
      "Acesso não autorizado! Entre em contato com a central de atendimento."
    );
  }
);

Scenario(
  "Não deve realizar o login com plano health",
  async ({ I, loginScreen }) => {
    const dataTest = students.not_login;

    I.resetStudent(dataTest.student);
    const enrollment_code = await I.createEnroll(dataTest);

    loginScreen.with(enrollment_code);
    I.popHaveText(
      "Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento."
    );
  }
);
