const form = document.getElementById('form')
const title = document.getElementById('title')
const date = document.getElementById('duedate')
const levelBtn = document.getElementById('levelbtn')
const taskList = document.getElementById('task-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = {
        title: title.value,
        date: date.value,
        level: level.value
    }

    addTasks(task)
    rendertasks()

    form.reset()
})

const addTasks = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const removeTask = (taskid) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => task.id !== taskid);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks)); 
    rendertasks(); 
};

const rendertasks = () => {
    taskList.innerHTML = ''
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">Due Date: ${task.date}</p>
            <p class="card-text">Level: ${task.level}</p>
            <button type="button" class="btn btn-outline-danger" onclick="removeTask(${task.id})">Done</button>
          </div>
        </div>
        `;
    });
}

rendertasks()