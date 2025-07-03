// Get the todo list and form elements
const todoList = document.getElementById('todo-items');
const todoForm = document.getElementById('add-todo-form');
const todoInput = document.getElementById('todo-input');
const errorMessage = document.getElementById('error-message');

// Initialize an empty todo list
let todos = [];

// Function to add a new todo item
function addTodo(todoText) {
  // Create a new todo item object
  const todo = {
    text: todoText,
    completed: false,
  };

  // Add the todo item to the list
  todos.push(todo);

  // Render the updated todo list
  renderTodoList();
}

// Function to remove a todo item
function removeTodo(index) {
  // Remove the todo item from the list
  todos.splice(index, 1);

  // Render the updated todo list
  renderTodoList();
}

// Function to toggle the completion status of a todo item
function toggleCompletion(index) {
  // Toggle the completion status of the todo item
  todos[index].completed = !todos[index].completed;

  // Render the updated todo list
  renderTodoList();
}

// Function to render the todo list
function renderTodoList() {
  // Clear the todo list element
  todoList.innerHTML = '';

  // Loop through each todo item and render it
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;

    // Add a checkbox to toggle completion status
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleCompletion(index);
    });
    todoItem.appendChild(checkbox);

    // Add a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeTodo(index);
    });
    todoItem.appendChild(removeButton);

    // Add the todo item to the list
    todoList.appendChild(todoItem);
  });
}

// Event listener for the add todo form
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the todo text from the input field
  const todoText = todoInput.value.trim();

  // Check if the todo text is not empty
  if (todoText) {
    // Add the new todo item
    addTodo(todoText);

    // Clear the input field
    todoInput.value = '';

    // Hide any error messages
    errorMessage.textContent = '';
  } else {
    // Display an error message
    errorMessage.textContent = 'Please enter a todo item';
  }
});

// Initialize the todo list
renderTodoList();