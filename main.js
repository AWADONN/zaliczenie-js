document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.querySelector('ul');
    const addButton = document.getElementById('addButton');
    const inputField = document.getElementById('taskInput');
    
    addButton.addEventListener('click', function() {
        const taskContent = inputField.value;
        if (taskContent.trim() !== '') {
            addTask(taskContent);
            inputField.value = '';
        } else {
            alert('Please enter a task!');
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            removeTask(event.target.dataset.key);
        }
    });

    function addTask(taskContent) {
        const newTask = document.createElement('li');
        newTask.dataset.key = Math.floor(Math.random() * 1000); 
        newTask.innerHTML = `<button data-key="${newTask.dataset.key}">Delete</button> ${taskContent}`;
        todoList.appendChild(newTask);
    }

    function removeTask(key) {
        const taskToRemove = document.querySelector(`li[data-key="${key}"]`);
        if (taskToRemove) {
            taskToRemove.remove();
        }
    }
});