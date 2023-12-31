// Function to add a new item to the list
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }
  
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(span);
  
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.setAttribute('onclick', 'deleteTask(this)');
    li.appendChild(deleteButton);
    li.setAttribute('id', 'task');
    taskList.appendChild(li);
  
    taskInput.value = '';
}
  
function deleteTask(button) {
    var li = button.parentNode;
    var taskList = li.parentNode;
    taskList.removeChild(li);
}


