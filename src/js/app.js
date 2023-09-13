// DOM elements
const taskForm = document.getElementById('task-form');
const inProgressList = document.getElementById('in-progress-list');
const startedList = document.getElementById('started-list');
const completedList = document.getElementById('completed-list');

// Counter to generate unique task IDs
let taskIdCounter = 1;

// Function to create a new task element
function createTaskElement(title, description, dueDate) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-item';
  taskDiv.draggable = true;
  taskDiv.id = `task-${taskIdCounter}`;
  taskIdCounter++;

  // Task content
  taskDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <p>Due Date: ${dueDate || 'Not specified'}</p>
  `;

  // Event listeners for drag-and-drop
  taskDiv.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', taskDiv.id);
  });

  return taskDiv;
}


