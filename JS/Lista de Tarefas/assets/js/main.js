const inputTask = document.querySelector('.input-task');
const addButton = document.querySelector('.add-button');
const taskItens = document.querySelector('.task-itens');

function createLi() {
  const li = document.createElement('li');
  return li;
}

function createTask(textInput) {
  const li = createLi();
  li.innerText = textInput;
  tarefas.appendChild(li);
}

addButton.addEventListener('click', function () {
  if (!inputTask.value) return;
  createTask(inputTask.value)
});
