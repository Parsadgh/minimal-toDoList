const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

function addTask() {
    const taskText = taskInput.value
    if (taskText == '') return

    const li = document.createElement('li')
    li.setAttribute('data-status', 'inprogress')
    li.innerHTML = `
        <div class='taskInfo'>
            <span class="task-text">${taskText}</span>
            <span class="taskStatus statusInProgress">🟡 In Progress</span>
        </div>

        <div class="task-buttons">
          <button onclick='btnDone(this)'>✔</button>
          <button onclick='removeTask(this)' class="delete">🗑</button>
        </div>  
        `

    taskList.appendChild(li)
    taskInput.value = ''
}

function removeTask(li) {
    // li.parentElement.parentElement.remove()
    li.closest('li').remove()
}

function btnDone(li) {
    const list = li.closest('li')
    const statusSpan = list.querySelector('.taskStatus')

    li.closest('li').classList.toggle('done')
    taskName = list.querySelector('.task-text').classList.toggle('TD')

    let txt = statusSpan.textContent
    if (txt == '🟡 In Progress') {
        statusSpan.textContent = '✅ Done'
    } else {
        statusSpan.textContent = '🟡 In Progress'
    }
}


// edit
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-text')) {
        task = e.target
        task.setAttribute('contenteditable', 'true')
        e.target.focus()
        task.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                task.setAttribute('contenteditable', 'false')
            }
        })
    }
})

// keyboard 
taskInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') addTask()
})
