const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')
const titleInp = document.getElementById('title')
const dueDateInp = document.getElementById('due-date')
const priorityInpt = document.getElementById('priority')

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = {
        title: titleInp.value,
        dueDate: dueDateInp.value,
        priority: priorityInpt.value,
        isDone: false
    }

    addTask(task)
    renderTasks()
    taskForm.reset()
})

const addTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const renderTasks = () => {
    taskList.innerHTML = ''

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach((task, index) => {
        const doneClass = task.isDone ? 'fst-italic text-decoration-line-through text-muted' : ''
        const checkedAttr = task.isDone ? 'checked' : ''
        let badgeClass;
        switch (task.priority) {
            case 'Easy':
                badgeClass = 'text-bg-success'
                break
            case 'Medium':
                badgeClass = 'text-bg-warning'
                break
            case 'Hard':
                badgeClass = 'text-bg-danger'
                break
        }

        taskList.innerHTML += `
            <div class="card mb-4">
                <div class="card-body ${doneClass}">
                    <h5 class="card-title mb-3">${task.title}</h5>
                    <p class="card-text"><strong>Due Date:</strong> ${task.dueDate}</p>
                    <p class="card-text"><strong>Priority:</strong> 
                        <span class="badge ${badgeClass}">${task.priority}</span>
                    </p>
                    <div class="form-check form-switch">
                        <input class="form-check-input done-switch" 
                        type="checkbox" role="switch" data-index="${index}" ${checkedAttr}>
                        <label class="form-check-label">Mark as Done</label>
                    </div>
                    <button class="btn btn-sm btn-secondary mt-2 edit-btn" data-index="${index}">Edit</button
                </div>
            </div>
        `
    })

    const allSwitchElems = document.querySelectorAll('.done-switch')
    allSwitchElems.forEach(input => {
        input.addEventListener('change', (event) => {
            const index = event.target.dataset.index
            toggleDone(index)
        })
    })
}

const toggleDone = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks[index].isDone = !tasks[index].isDone
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
}

renderTasks()