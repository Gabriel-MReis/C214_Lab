let tasks = [];

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const importance = document.getElementById('importance').value;

    if (title && description && importance) {
        const creationDate = new Date();
        tasks.push({ title, description, importance, status: 'A fazer', expanded: false, creationDate });
        updateTaskList();
        clearInputs();
    }
}

function addTask_(title, description, importance) {
    const creationDate = new Date();
    const newTask = { title, description, importance, status: 'A fazer', expanded: false, creationDate };
    tasks.push(newTask);
    return newTask;
}

function updateStatus(index, newStatus) {
    tasks[index].status = newStatus;

    if (newStatus === 'Concluída') {
        tasks[index].completionDate = new Date();
    }

    updateTaskList();
}

function toggleTask(index) {
    tasks[index].expanded = !tasks[index].expanded;
    updateTaskList();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function generateTaskListHTML(tasks) {
    let html = '';

    tasks.forEach((task, index) => {
        let statusColor;
        switch (task.status) {
            case 'A fazer':
                statusColor = 'red';
                break;
            case 'Em andamento':
                statusColor = 'yellow';
                break;
            case 'Concluída':
                statusColor = 'green';
                break;
            default:
                statusColor = 'black';
        }

        let color;
        switch (task.importance) {
            case 'alta':
                color = 'red';
                break;
            case 'média':
                color = 'yellow';
                break;
            case 'baixa':
                color = 'green';
                break;
            default:
                color = 'black';
        }

        html += `
            <div class="task">
                <div class="task-header">
                    <span class="toggle-arrow" onclick="toggleTask(${index})">${task.expanded ? '&#9665;' : '&#9654;'}</span>
                    <h2 style="color:${color}">${task.title}</h2>
                </div>
                ${task.expanded ? `
                    <p>${task.description}</p>
                    <p>Status: <span style="color:${statusColor}">${task.status}</span></p>
                    <p>Data de Criação: ${task.creationDate.toLocaleString()}</p>
                    ${task.status === 'Concluída' ? `<p>Data de Conclusão: ${task.completionDate.toLocaleString()}</p>` : ''}
                    <button onclick="updateStatus(${index}, 'Em andamento')">Iniciar</button>
                    <button onclick="updateStatus(${index}, 'Concluída')">Concluir</button>
                    <button onclick="deleteTask(${index})">Excluir</button>
                ` : ''}
            </div>
        `;
    });

    return html;
}

function updateTaskList() {
    if (typeof document !== 'undefined') {
        const taskListElement = document.getElementById('taskList');
        taskListElement.innerHTML = generateTaskListHTML(tasks);
    }
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('importance').value = 'alta';
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTask,
        addTask_,
        updateStatus,
        toggleTask,
        deleteTask,
        updateTaskList,
        clearInputs,
        getTasks: () => tasks,
        generateTaskListHTML
    };
}

// Exemplo de tarefas iniciais
tasks = [
    { title: 'Tarefa 1', description: 'Descrição da Tarefa 1', importance: 'alta', status: 'A fazer', expanded: false, creationDate: new Date() },
    { title: 'Tarefa 2', description: 'Descrição da Tarefa 2', importance: 'média', status: 'A fazer', expanded: false, creationDate: new Date() }
];

updateTaskList();
