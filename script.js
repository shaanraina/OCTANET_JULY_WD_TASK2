document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'actions';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit task:', taskItem.firstChild.textContent);
            if (newText !== null) {
                taskItem.firstChild.textContent = newText;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        actionsContainer.appendChild(completeBtn);
        actionsContainer.appendChild(editBtn);
        actionsContainer.appendChild(deleteBtn);

        taskItem.appendChild(actionsContainer);
        taskList.appendChild(taskItem);

        newTaskInput.value = '';
        newTaskInput.focus();
    }
});
