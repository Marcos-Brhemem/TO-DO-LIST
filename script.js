const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullTask = document.querySelector('.list-tasks')

let tasks = []

// adiciona tarefas.

function addTask() {

    if (!input.value.trim()) {
        alert("Descreva alguma tarefa")
        return false
    }


    tasks.push({

        task: input.value,
        done: false
    })


    input.value = ''
    showTask()
}

// mostra tarefas

function showTask() {

    let newLi = ''

    tasks.forEach((item, index) => {

        newLi = newLi +
            `<li class="task ${item.done ? 'done' : ''}">
        <img src="./img/checked.png" alt="checked" onclick="taskDone(${index})"/>
         <p>${item.task}</p>
         <img src="./img/trash.png" alt="trash" onclick="deleteItem(${index})"/>
        </li>`

    })

    fullTask.innerHTML = newLi
    localStorage.setItem('list',JSON.stringify(tasks))
}

// tarefa ok

function taskDone(index) {
   tasks[index].done = !tasks[index].done
   showTask()
}

// deletar tarefa 

function deleteItem(index) {
    tasks.splice(index, 1)
    showTask()
}

// LocalStorage

function reloadTasks(){
    const taskLocalStorage = localStorage.getItem('list');
    if (taskLocalStorage) { 
        tasks = JSON.parse(taskLocalStorage);
    }
    showTask();
}

window.onload = reloadTasks;


button.addEventListener('click', addTask)