let pendingList = document.getElementById('pendingList');
let completedList = document.getElementById('completedList');

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = createTaskElement(taskText, false);
  pendingList.appendChild(li);
  taskInput.value = '';
}

function createTaskElement(text, isCompleted) {
  const li = document.createElement('li');
  li.textContent = text;

  const actionDiv = document.createElement('div');
  actionDiv.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = isCompleted ? 'Undo' : 'Complete';
  completeBtn.onclick = () => toggleComplete(li, isCompleted);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => editTask(li);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  actionDiv.appendChild(completeBtn);
  actionDiv.appendChild(editBtn);
  actionDiv.appendChild(deleteBtn);

  li.appendChild(actionDiv);

  if (isCompleted) li.classList.add('completed');
  return li;
}

function toggleComplete(li, wasCompleted) {
  li.remove();
  const text = li.firstChild.textContent;
  const newLi = createTaskElement(text, !wasCompleted);
  if (wasCompleted) {
    pendingList.appendChild(newLi);
  } else {
    completedList.appendChild(newLi);
  }
}

function editTask(li) {
  const newText = prompt('Edit task:', li.firstChild.textContent);
  if (newText !== null && newText.trim() !== '') {
    li.firstChild.textContent = newText.trim();
  }
}
