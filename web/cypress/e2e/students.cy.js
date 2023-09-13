import students from "../fixtures/students";

import studentPage from "../support/pages/StudentPage";

describe("Students", () => {
  it("Cadastrar um novo aluno com sucesso", () => {
    const student = students.create;

    // cy.task("deleteStudent", student.email);
    cy.deleteStudent(student.email)

    cy.adminLogin();

    studentPage.goToRegister();
    studentPage.submitForm(student);
    studentPage.popUp.haveText("Dados cadastrados com sucesso.");
  });

  it("Não deve cadastrar com e-mail duplicado", () => {
    const student = students.duplicate;

    // cy.task("resetStudent", student);
    cy.resetStudent(student)

    cy.adminLogin();

    studentPage.goToRegister();
    studentPage.submitForm(student);
    studentPage.popUp.haveText("O email informado já foi cadastrado!");
  });

  it("Remover aluno sem matricula", () => {
    const student = students.remove;

    // cy.task("resetStudent", student);
    cy.resetStudent(student)

    cy.adminLogin();

    studentPage.search(student.name);
    studentPage.delete(student.email);
    studentPage.popUp.confirm();
    studentPage.popUp.haveText("Exclusão realizada com sucesso.");
  });

  it('Validar a obrigatoriedade dos campos', () => {

    const student = students.required

    cy.adminLogin();
    studentPage.goToRegister();
    studentPage.submitForm(student)
    studentPage.requiredMessage('Nome completo', 'Nome é obrigatório')
    studentPage.requiredMessage('E-mail', 'O email é obrigatório')
    studentPage.requiredMessage('Idade', 'A idade é obrigatória')
    studentPage.requiredMessage('Peso (em kg)', 'O peso é obrigatório')
    studentPage.requiredMessage('Altura', 'A altura é obrigatória')
  });
});
