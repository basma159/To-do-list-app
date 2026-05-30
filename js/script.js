
let input = document.querySelector("#input")
let list = document.querySelector(".lists")
let addBtn = document.querySelector(".addBtn")


addBtn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Please, Enter Your Task")
    }
    else {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
        console.log(localStorage.getItem("tasks"))
        let newTask = {
            id: Date.now(),
            text: input.value,
            completed: false
        }
        tasks.push(newTask)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        createTask(newTask)
        input.value = ""
    }

})

function createTask(taskText, index) {
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let li = document.createElement("li")
    let span = document.createElement("span")
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    let button = document.createElement("button")
    button.textContent = "Delete"
    span.textContent = "not finish"
    span.style.textTransform = "capitalize"
    list.appendChild(div1)
    div1.appendChild(li)
    div1.appendChild(div2)
    div2.appendChild(checkBox)
    div2.appendChild(span)
    div1.appendChild(button)
    div1.dataset.id = taskText.id
    div1.style.display = "flex"
    div1.style.justifyContent = "center"
    div1.style.alignItems = "center"
    div1.style.gap = "20px"
    div1.style.width = "100%"
    div2.style.backgroundColor = "white"
    div2.style.color = "#007979"
    div2.style.borderRadius = "20px"
    div2.style.padding = "15px"
    li.textContent = taskText.text
    checkBox.checked = taskText.completed
    if (taskText.completed) {
        li.style.textDecoration = "line-through"
        span.textContent = "finished"
    }
    else {
        li.style.textDecoration = "none"
        span.textContent = "not finish"
    }

    button.onclick = function () {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks = tasks.filter(task => task.id !== taskText.id)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        div1.remove()

    }
    checkBox.onchange = function () {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []

        let task = tasks.find(t => t.id === taskText.id)
        task.completed = checkBox.checked

        localStorage.setItem("tasks", JSON.stringify(tasks))

        li.style.textDecoration = checkBox.checked ? "line-through" : "none"
        span.textContent = checkBox.checked ? "finished" : "not finish"
        div2.style.padding = checkBox.checked ? "15px 30px" : "20px"

    }
}


function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach((task) => {
        createTask(task)

    });
}

showTasks()
