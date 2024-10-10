document.getElementById('addButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
  
    if (taskText === "") {
      alert("Inserisci un compito!");
      return;
    }
  
    // Crea un nuovo elemento della lista
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    taskItem.classList.add('list-group-item');  // Aggiungi classi di Bootstrap
  
    // Crea un pulsante per eliminare l'elemento
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Elimina';
    deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
  
    // Aggiungi evento al task per applicare o rimuovere lo strikethrough
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });
  
    // Aggiungi evento al pulsante per eliminare il task
    deleteButton.addEventListener('click', function (event) {
      event.stopPropagation();  // Previeni il clic sul taskItem
      taskItem.remove();
    });
  
    // Aggiungi il pulsante di eliminazione all'elemento della lista
    taskItem.appendChild(deleteButton);
  
    // Aggiungi il nuovo task alla lista
    const taskList = document.getElementById('taskList');
    taskList.appendChild(taskItem);
  
    // Svuota il campo di input
    taskInput.value = "";
  });

  // Aggiungi evento di strikethrough per i task esistenti
const existingTasks = document.querySelectorAll('ul li');
existingTasks.forEach(function (taskItem) {
  taskItem.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });
});