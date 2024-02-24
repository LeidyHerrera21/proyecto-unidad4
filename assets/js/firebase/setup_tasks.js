import {createTask, 
    deleteTask,
    updateTack,
    onGetTask,
    getTask} from './firebase.js'; 

const taskForm = document.getElementById("create-form")
const taskContainer = document.getElementById("tasks-container")

let id = "";
let editStatus = false;
let userGlobal


export default function setupTasks(user) {
userGlobal = user; 


    onGetTask((querySnapshot) => {
        let html = ''; 


        querySnapshot.forEach(doc => {
            const data = doc.data();

            html += `
                <div class="card mb-3">
                    <div class="card-body">
                    <p>${data.date}</p>
                    <h6>${data.userName}</h6>
                    <p>${data.time}</p>
                        <h4 class="card-title">${data.title}</h4>
                        <p class="card-text">${data.description}</p>
                        <div class="row">
                            <button class='btn btn-danger btn-delete-custom mx-auto col-5' data-id='${doc.id}'>Delete</button>
                            <button class='btn btn-info btn-edit-custom mx-auto col-5' data-id='${doc.id}'>Edit</button>
                        </div>
                    </div>
                </div>
            `;
        });

        taskContainer.innerHTML = html;

        // delete

        const btnsDelete = document.querySelectorAll(".btn-delete-custom");

        btnsDelete.forEach(btn => {
            btn.addEventListener("click", ({target: { dataset }}) => deleteTask(dataset.id));
        });

        // UPDATE

        const btnsEdit = document.querySelectorAll(".btn-edit-custom");
        btnsEdit.forEach(btn => {
            btn.addEventListener("click", async ({target: {dataset}}) => {
                // LOGICA DE UPDATE
                const doc = await getTask(dataset.id);
                const task = doc.data();

                taskForm["task-title"].value = task.title;
                taskForm["task-content"].value = task.description;

                editStatus = true;
                id = doc.id;

                taskForm["btn-task-save"].innerHTML = "Update";
                // taksText.innerHTML = "Edit Task";


            });
        });

    });
    
}; 

// create

taskForm.addEventListener("submit", (e) => {
    // evitamos que recargue la pagina
 e.preventDefault();

// fecha
const fullDate = new Date();
 const date = getFormattedDate(fullDate);
 const time = getFormattedHour(fullDate);

//  obtener el nombre 

const userName = userGlobal.displayName;

 const title = taskForm["task-title"].value;
 const description = taskForm["task-content"].value;

//  si no estoy editando el boton sirve para crear
 if (!editStatus) {
    createTask(title, description, userName, date, time);
 }
 else {
    updateTack(id, ({
        title: title,
        description: description,
    }));

   editStatus = false;

   taskForm["btn-task-save"].innerHTML = "Create";
     // taksText.innerHTML = "New Task";
}

 createTask(title, description); 

 taskForm.reset();

})

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}

// 
function getFormattedHour(date) {
    var hour = date.getHours();
    var minutes = date.getHours();
    
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hour + ':' + minutes;
}