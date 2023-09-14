import data from "../fixtures/questions.json";

describe('Recebimento de questionamentos', () => {
    
    it('Deve receber uma notificação com uma pergunta do aluno', () => {
        
        const dataTest = data.create;

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest);
        cy.createQuestion(dataTest.question)

        // cy.adminLogin();
    
        // enrollsPage.navbar.goToEnrolls();
        // enrollsPage.goToForm();
        // enrollsPage.selectItem("student", dataTest.student.name);
        // enrollsPage.selectItem("plan", dataTest.plan.name);
        // enrollsPage.fillCard(dataTest.student.name);
        // enrollsPage.submite();
        // enrollsPage.popup.haveText("Matrícula cadastrada com sucesso.");
    });
});