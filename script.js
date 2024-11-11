const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const toDoWorks = document.querySelector('#to-do-works-ul')
const worksList = document.querySelector('.to-do-works')

// Load saved tasks from localStorage
getData()

// Event listener to add a new task
addTaskBtn.addEventListener('click', () => {
    if (taskInput.value) {
        // Create & append the new task to the list
        const li = document.createElement('li')
        li.innerHTML = taskInput.value
        toDoWorks.appendChild(li)
        console.log(li.innerText);
        

        // Create & append the span (x) to act as the delete button
        const span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)

        taskInput.value = '' 
        setData();
        
    } else {
        alert('You must write something')
    }
 
})

toDoWorks.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        // Toggle the 'completed' class when clicking on a list item
        e.target.classList.toggle('completed')
        setData();
    }
    else if(e.target.tagName === 'SPAN'){ 
        // Remove the task when clicking on the delete button

        e.target.parentElement.remove()
        setData();
    }
})

function setData(){
    localStorage.setItem('taskData', worksList.innerHTML)
}

function getData(){
    const savedData = localStorage.getItem('taskData');
    if (savedData) {
        worksList.innerHTML = savedData;
        attachEventListeners();
    }
}

// Function to attach event listeners to all list items and delete buttons
function attachEventListeners() {
    const taskItems = worksList.querySelectorAll('li');
    
    taskItems.forEach(task => {
        task.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                // Toggle completion
                e.target.classList.toggle('completed');
                setData();
            } else if (e.target.tagName === 'SPAN') {
                // Delete task
                e.target.parentElement.remove();
                setData();
            }
        });
    });
}





