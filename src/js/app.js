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

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const titleInput = document.getElementById('task-title');
  const descriptionInput = document.getElementById('task-description');
  const dueDateInput = document.getElementById('task-due-date');

  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;

  if (title.trim() === '') {
    alert('Please enter a task title.');
    return;
  }

  // Add the task to "In Progress" list
  addTaskToInProgress(title, description, dueDate);

  // Clear form inputs
  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';
}

// Function to add a new task to the "In Progress" list
function addTaskToInProgress(title, description, dueDate) {
  const taskElement = createTaskElement(title, description, dueDate);
  inProgressList.appendChild(taskElement);
}

// Event listener for form submission
taskForm.addEventListener('submit', handleFormSubmit);


//Code bellow does not work

// Event listeners for drag-and-drop functionality
inProgressList.addEventListener('dragover', (e) => {
  e.preventDefault();
});

inProgressList.addEventListener('drop', (e) => {
  const taskId = e.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  inProgressList.appendChild(taskElement);
});

startedList.addEventListener('dragover', (e) => {
  e.preventDefault();
});

startedList.addEventListener('drop', (e) => {
  const taskId = e.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  startedList.appendChild(taskElement);
});

completedList.addEventListener('dragover', (e) => {
  e.preventDefault();
});

completedList.addEventListener('drop', (e) => {
  const taskId = e.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  completedList.appendChild(taskElement);
}); 

// Function to move a task to the "Completed" list
function moveTaskToCompleted(taskId) {
  const taskElement = document.getElementById(taskId);
  completedList.appendChild(taskElement);
}

// Event listener for drag-and-drop functionality on "Completed" list
completedList.addEventListener('dragover', (e) => {
  e.preventDefault();
});

completedList.addEventListener('drop', (e) => {
  const taskId = e.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  moveTaskToCompleted(taskId);
});

// ... (Rest of the previous code)



