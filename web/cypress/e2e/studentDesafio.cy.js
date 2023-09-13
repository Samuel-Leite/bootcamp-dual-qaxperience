import students from "../fixtures/students";

import studentPage from "../support/pages/StudentPage";

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