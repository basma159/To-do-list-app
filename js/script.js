
// let temperature = document.querySelector(".container h1")
// let time = document.querySelector(".container span")

// async function get() {
//     const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=26.55&longitude=31.69&current_weather=true")
//     const data = await response.json()
//     console.log(data)
//     console.log(data.results[0])
//     if (data.current_weather.temperature > 30) {
//         document.body.style.background = "orange"
//     }
//     // console.log(data.current_weather.temperature)
//     // let date =new Date(data.current_weather.time)
//     temperature.innerHTML = `temperature in sohag: ${data.current_weather.temperature} °C `
//     setInterval(() => {
//         time.innerHTML = `time in sohag: ${new Date().toLocaleTimeString("en-us", {
//             timeZone: "Africa/Cairo"
//         })} `
//     },1000)

// }

// get()
// ////////////////////////////////////////////////

let input = document.querySelector("#input")
let list = document.querySelector(".lists")
let addBtn = document.querySelector(".addBtn")


addBtn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Please, Enter Your Task")
    }
    else {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.push(input.value)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        createTask(input.value)
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
    div1.style.display = "flex"
    div1.style.justifyContent = "center"
    div1.style.alignItems = "center"
    div1.style.gap = "20px"
    div1.style.width = "100%"
    div2.style.backgroundColor = "white"
    div2.style.color = "#007979"
    div2.style.borderRadius = "20px"
    div2.style.padding = "15px"
    li.textContent = taskText

    button.onclick = function () {
        let tasks =JSON.parse(localStorage.getItem("tasks"))||[]
        tasks.splice(index,1)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        div1.remove()
        
    }
    checkBox.onchange = function () {
        li.style.textDecoration = checkBox.checked ? "line-through" : "none"
        span.textContent = checkBox.checked ? "finished" : "not finish"
        div2.style.padding = checkBox.checked ? "15px 30px" : "20px"
    }
}


function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach((task, index) => {
        createTask(task, index)

    });
}

showTasks()
