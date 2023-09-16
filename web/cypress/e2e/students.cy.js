import students from "../fixtures/students";

import studentPage from "../support/pages/StudentPage";

describe("Cenários de testes realizados durante as aulas", () => {
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

describe('Desafios propostos no bootcamp do dia 22/07/2023', () => {

  it('Tentar cadastrar um aluno menor de 16 anos', () => {
      
      const student = students.inv_age

      cy.adminLogin();
      studentPage.goToRegister();
      studentPage.submitForm(student)
      studentPage.requiredMessage('Idade', 'A idade mínima para treinar é 16 anos!')
  });

  it('Tentar cadastrar informando peso incorreto', () => {
     
      const student = students.inv_weight

      cy.task("deleteStudent", student.email);

      cy.adminLogin();
      studentPage.goToRegister();
      studentPage.submitForm(student)
      studentPage.requiredMessage('Peso (em kg)', 'O peso mínimo para treinar deve ser maior que 0!')
  });

  it('Tentar cadastrar informando altura incorreta', () => {
      
      const student = students.inv_feet_tall

      cy.task("deleteStudent", student.email);

      cy.adminLogin();
      studentPage.goToRegister();
      studentPage.submitForm(student)
      studentPage.requiredMessage('Altura', 'A altura mínima para treinar deve ser maior que 0!')
  });
  
});