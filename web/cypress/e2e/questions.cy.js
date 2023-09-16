import data from "../fixtures/questions.json";
import studentPage from "../support/pages/StudentPage";

describe('Recebimento de questionamentos', () => {
    
    it('Deve receber uma notificação com uma pergunta do aluno', () => {
        
        const dataTest = data.notification;

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest);
        cy.createQuestion(dataTest.question)

        cy.adminLogin();
        
        studentPage.navbar.openNotification()
        studentPage.notification.haveQuestion(dataTest.question)
    });
});

describe('Desafio proposto no bootcamp', () => {
    
    it('Deve responder uma pergunta enviada pelo aluno', () => {
        
        const dataTest = data.prof_answer;

        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest);
        cy.createQuestion(dataTest.question)

        cy.adminLogin();

        studentPage.navbar.openNotification()
        studentPage.notification.openQuestion(dataTest.question)
        studentPage.notification.sendAnswer(dataTest.answer)

        studentPage.popUp.haveText("Resposta enviada com sucesso");
    });
});