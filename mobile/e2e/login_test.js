Feature("login");

Scenario("Deve realizar o login com sucesso", ({ I, loginScreen, account }) => {
  loginScreen.with("BYCXL4");
  account.userLoggedIn();
});

Scenario(
  "Não deve realizar o login com matrícula inexistente",
  ({ I, loginScreen }) => {
    loginScreen.with("ABC123");
    I.popHaveText(
      "Acesso não autorizado! Entre em contato com a central de atendimento."
    );
  }
);

Scenario("Não deve realizar o login com plano health", ({ I, loginScreen }) => {
  loginScreen.with("SIGB2V");
  I.popHaveText(
    "Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento."
  );
});
