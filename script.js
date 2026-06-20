let inputs = document.querySelector(".input")
let text = document.querySelector(".text")

// let tasks = []; // create array for adding all tasks in this add for local storage use
let tasks = JSON.parse(localStorage.getItem("myTasks")) || []; // parse() convert string into the array
console.log(tasks);

function renderTask(taskText){
   let newEle = document.createElement("ul")
    newEle.innerHTML = `${taskText} <i class="fa fa-trash"></i>`
    newEle.style.backgroundColor = "#00838F"
    newEle.style.borderBottom = "2px solid black"
    newEle.style.margin = "5px 5px"
    newEle.style.fontWeight = "bold"
    text.appendChild(newEle)

    // strik effect 
    newEle.onclick = function() {
    newEle.classList.toggle("done");
}

    let trashItem = newEle.querySelector("i");
    trashItem.addEventListener("click", function (){
    
    tasks = tasks.filter(task => task !== taskText); // for removing trashed task from the localStorage
    
    localStorage.setItem("myTasks", JSON.stringify(tasks)); // after removing we update the localStorage

    newEle.remove();
})
}

tasks.forEach(task => renderTask(task));

function add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{

        tasks.push(inputs.value); // push into the array
        localStorage.setItem("myTasks", JSON.stringify(tasks)); // array does not direct stoare on the local storage so we have to convert tasks into string then set to local stoarge
        console.log(tasks);// now tasks are not show the screen but they are store on localstorage 
        renderTask(inputs.value)
        inputs.value = "";

        // let newEle = document.createElement("ul")
        // newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true"></i>`
        // newEle.style.backgroundColor = "#478fb6"
        // newEle.style.borderBottom = "2px solid black"
        // newEle.style.margin = "5px 5px"
        // newEle.style.fontWeight = "bold"
        // text.appendChild(newEle)
        

        // trashItem = newEle.querySelector("i");
        // trashItem.addEventListener("click", function (){
        //     newEle.remove();
        // })


    }

}

