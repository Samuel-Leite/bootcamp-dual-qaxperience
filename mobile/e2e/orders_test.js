const orders = require("../fixtures/orders.json");

Feature("Pedido de ajuda no HealthXP");

Scenario(
  "Deve permitir solicitar ajuda",
  async ({ I, loginScreen, account, helpOrder }) => {
    const dataTest = orders.help;

    I.resetStudent(dataTest.student);
    const enrollment_code = await I.createEnroll(dataTest);

    loginScreen.with(enrollment_code);
    account.userLoggedIn();

    helpOrder.submit(dataTest.question);

    I.popHaveText(
      "Sua dúvida foi recebida e será avaliada pela nossa equipe. Agora é só aguardar para receber o nosso feedback."
    );
  }
);
