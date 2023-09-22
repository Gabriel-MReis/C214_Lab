const chai = require('chai');
const assert = chai.assert;

// Importe as funções que você deseja testar
const { addTask, updateStatus, deleteTask, getTasks } = require('../src/script');

describe('Testes do Gerenciador de Tarefas', () => {
    let tasks;

    beforeEach(() => {
        tasks = [
            { title: 'Tarefa 1', description: 'Descrição da Tarefa 1', importance: 'alta', status: 'A fazer', expanded: false, creationDate: new Date() },
            { title: 'Tarefa 2', description: 'Descrição da Tarefa 2', importance: 'média', status: 'A fazer', expanded: false, creationDate: new Date() }
        ];
    });

    it('Deve adicionar uma nova tarefa', () => {
        const initialLength = tasks.length;

        addTask('Nova Tarefa', 'Descrição da Nova Tarefa', 'alta');

        assert.lengthOf(getTasks(), initialLength + 1);
        assert.equal(getTasks()[getTasks().length - 1].title, 'Nova Tarefa');
        assert.equal(getTasks()[getTasks().length - 1].status, 'A fazer');
        deleteTask(2);
    });

    it('Deve atualizar o status de uma tarefa', () => {
        const index = 0;
        const newStatus = 'Concluída';

        updateStatus(index, newStatus);

        assert.equal(getTasks()[index].status, newStatus);
        assert.property(getTasks()[index], 'completionDate');
    });

    it('Deve excluir uma tarefa', () => {
        const index = 0;

        deleteTask(index);

        assert.lengthOf(getTasks(), 1);
        assert.equal(getTasks()[index].title, 'Tarefa 2');
    });
});
