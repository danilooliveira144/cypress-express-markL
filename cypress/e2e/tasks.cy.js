/// <reference types="cypress"/>

describe('tasks', () => {

    it('Deve cadastrar um nova tarefa', () => {

        const taskName = 'Ler um livro de Node.js';

        cy.removeTaskByName(taskName);

        cy.createTask(taskName);

        cy.get('main div p')
            .contains(taskName)
            .should('be.visible');
    });

    it('Não deve permitir tarefa duplicada', () => {

        const task = {
            name: 'Estudar JavaScript',
            is_done: false
        };

        cy.removeTaskByName(task.name);
        
        cy.postTask(task)       

        cy.createTask(task.name);

        cy.get('.swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Task already exists!');
    });

    it('Não deve criar sem preencher o campo obrigatório', () => {
        cy.createTask();

        cy.isRequired('This is a required field');
    });
});