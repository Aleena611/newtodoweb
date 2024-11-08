document.getElementById("task-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value;
  
  if (taskText === "") {
      alert("Please enter a task");
      return;
  }

  // Create a new task item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button for task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  
  // Add confirmation dialog for deleting the task
  deleteBtn.addEventListener("click", function() {
      const confirmDelete = confirm("Are you sure you want to delete this task?");
      if (confirmDelete) {
          li.remove(); // Remove the task item if confirmed
      }
  });

  li.appendChild(deleteBtn);

  // Add task to the task list
  document.getElementById("task-list").appendChild(li);

  // Clear input
  taskInput.value = "";
});
