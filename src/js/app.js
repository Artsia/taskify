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
}