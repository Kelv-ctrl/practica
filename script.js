/* ------------------------------ */
/* CÓDIGO ORIGINAL                */
/* ------------------------------ */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i = i + 1) {
        const task = tasks[i];

        const li = document.createElement("li");
        li.className = "task-item";

        const titleSpan = document.createElement("span");
        titleSpan.className = "task-title";
        titleSpan.textContent = task.title;

        if (task.done === true) {
            titleSpan.classList.add("done");
        }

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "task-actions";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Hecha";
        completeBtn.className = "btn-complete";
        completeBtn.addEventListener("click", function () {
            toggleTaskDone(i);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "btn-delete";
        deleteBtn.addEventListener("click", function () {
            deleteTask(i);
        });

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(titleSpan);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);
    }
}

function addTask() {
    const title = taskInput.value.trim();

    if (title === "") {
        alert("La tarea no puede estar vacía.");
        return;
    }

    const task = {
        title: title,
        done: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

function toggleTaskDone(index) {
    const task = tasks[index];
    task.done = !task.done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

renderTasks();


/* ------------------------------ */
/* NUEVA FUNCIÓN COMENTADA        */
/* ------------------------------ */

/*

// 1) Obtener referencia al botón
const clearCompletedBtn = document.getElementById("clearCompletedBtn");


// 2) Nueva función para eliminar tareas completadas
function clearCompletedTasks() {
    const pendingTasks = [];

    for (let i = 0; i < tasks.length; i = i + 1) {
        if (tasks[i].done === false) {
            pendingTasks.push(tasks[i]);
        }
    }

    tasks.length = 0;

    for (let j = 0; j < pendingTasks.length; j = j + 1) {
        tasks.push(pendingTasks[j]);
    }

    renderTasks();
}


// 3) Activar evento para el botón
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

*/

