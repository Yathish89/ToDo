let taskList = [
    { text: 'Go for a run', completed: false },
    { text: 'Read a book', completed: false },
    { text: 'Practice coding', completed: false }
];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskList.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    displayTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="task${index + 1}" onclick="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
            <label for="task${index + 1}" class="${task.completed ? 'completed' : ''}">${task.text}</label>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayTasks);
